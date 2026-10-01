"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, WhatsApp } from "@/components/ui/icons";
import type { Dictionary } from "@/content/dictionaries";

type FormLabels = Dictionary["contactPage"]["form"];
type Status = "idle" | "sending" | "sent" | "handoff" | "error";
type Field = "name" | "email" | "consent";

interface ContactFormProps {
  labels: FormLabels;
  services: { id: string; name: string }[];
  email: string;
  /** WhatsApp digits, or "" when not configured. */
  whatsapp: string;
  /** JSON endpoint (Formspree-style). Empty: hand off to WhatsApp / email. */
  endpoint: string;
  privacyHref: string;
  locale: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Event brief form. Uncontrolled inputs (read with FormData on submit) keep
 * it light; validation is custom so messages match the site's language.
 */
export function ContactForm({ labels, services, email, whatsapp, endpoint, privacyHref, locale }: ContactFormProps) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sentName, setSentName] = useState("");

  // Preselect a service from ?servicio= / ?service= (links from service pages).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const wanted = params.get("servicio") ?? params.get("service");
    if (!wanted || !formRef.current) return;
    const box = formRef.current.querySelector<HTMLInputElement>(`input[name="services"][value="${CSS.escape(wanted)}"]`);
    if (box) box.checked = true;
  }, []);

  useEffect(() => {
    if (status === "sent" || status === "handoff") resultRef.current?.focus();
  }, [status]);

  const id = (name: string) => `${uid}-${name}`;

  function validate(data: FormData) {
    const next: Partial<Record<Field, string>> = {};
    if (String(data.get("name") ?? "").trim().length < 2) next.name = labels.errors.name;
    if (!EMAIL_RE.test(String(data.get("email") ?? "").trim())) next.email = labels.errors.email;
    if (!data.get("consent")) next.consent = labels.errors.consent;
    return next;
  }

  function brief(data: FormData) {
    const serviceNames = data
      .getAll("services")
      .map((v) => services.find((s) => s.id === v)?.name ?? String(v));
    const rows: [string, string][] = [
      [labels.name, String(data.get("name") ?? "")],
      [labels.org, String(data.get("org") ?? "")],
      [labels.email, String(data.get("email") ?? "")],
      [labels.phone, String(data.get("phone") ?? "")],
      [labels.profile, String(data.get("profile") ?? "")],
      [labels.eventType, String(data.get("eventType") ?? "")],
      [labels.services, serviceNames.join(", ")],
      [labels.date, String(data.get("date") ?? "")],
      [labels.city, String(data.get("city") ?? "")],
      [labels.guests, String(data.get("guests") ?? "")],
      [labels.budget, String(data.get("budget") ?? "")],
      [labels.message, String(data.get("message") ?? "")],
    ];
    return [labels.briefIntro, "", ...rows.filter(([, v]) => v.trim()).map(([k, v]) => `• ${k}: ${v.trim()}`)].join("\n");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const firstInvalid = (["name", "email", "consent"] as Field[]).find((f) => found[f]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const name = String(data.get("name")).trim();
    setSentName(name.split(" ")[0]);

    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    if (String(data.get("_gotcha") ?? "")) {
      setStatus("sent");
      return;
    }

    if (endpoint) {
      setStatus("sending");
      try {
        const payload = Object.fromEntries(
          [...new Set(data.keys())].filter((k) => k !== "_gotcha").map((k) => [k, k === "services" ? data.getAll(k) : data.get(k)]),
        );
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...payload, _subject: labels.emailSubject.replace("{name}", name), locale }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStatus("sent");
        form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // No backend: hand the brief to WhatsApp or the email app.
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const text = brief(data);
    if (submitter?.value === "whatsapp" && whatsapp) {
      window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    } else {
      const subject = labels.emailSubject.replace("{name}", name);
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    }
    setStatus("handoff");
  }

  if (status === "sent" || status === "handoff") {
    return (
      <div ref={resultRef} tabIndex={-1} role="status" className="card p-8 outline-none sm:p-12">
        <span className="grid size-14 place-items-center rounded-full bg-volt text-ink-950">
          <Check className="size-7" strokeWidth={2.4} />
        </span>
        <h2 className="mt-8 font-display text-display-sm text-white">{labels.successTitle}</h2>
        <p className="lead mt-4">
          {status === "sent" ? labels.successBody.replace("{name}", sentName) : labels.successHandoff}
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="link-arrow mt-8">
          {labels.again}
          <ArrowRight />
        </button>
      </div>
    );
  }

  const fieldError = (f: Field) =>
    errors[f] ? (
      <p id={id(`${f}-error`)} className="text-sm font-medium text-[#ff9d82]">
        {errors[f]}
      </p>
    ) : null;

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card p-6 sm:p-10" aria-labelledby={id("title")}>
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-6">
        <h2 id={id("title")} className="font-display text-title text-white">
          {labels.title}
        </h2>
        <p className="mono-label text-fg-subtle">
          <span className="text-volt">*</span> {labels.required}
        </p>
      </div>

      <div aria-live="polite" className={hasErrors ? "mt-6 rounded-[var(--radius-sm)] border border-[#ff9d82]/40 bg-[#ff9d82]/10 px-4 py-3 text-sm text-white" : "sr-only"}>
        {hasErrors ? labels.errors.summary : ""}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="field">
          <label htmlFor={id("name")} className="field-label">
            {labels.name} <span className="text-volt" aria-hidden="true">*</span>
          </label>
          <input
            id={id("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={labels.namePlaceholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? id("name-error") : undefined}
            className="input"
          />
          {fieldError("name")}
        </div>
        <div className="field">
          <label htmlFor={id("email")} className="field-label">
            {labels.email} <span className="text-volt" aria-hidden="true">*</span>
          </label>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder={labels.emailPlaceholder}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? id("email-error") : undefined}
            className="input"
          />
          {fieldError("email")}
        </div>
        <div className="field">
          <label htmlFor={id("org")} className="field-label">
            {labels.org}
          </label>
          <input id={id("org")} name="org" type="text" autoComplete="organization" placeholder={labels.orgPlaceholder} className="input" />
        </div>
        <div className="field">
          <label htmlFor={id("phone")} className="field-label">
            {labels.phone}
          </label>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder={labels.phonePlaceholder} className="input" />
        </div>

        <fieldset className="field sm:col-span-2">
          <legend className="field-label mb-3">{labels.profile}</legend>
          <div className="flex flex-wrap gap-2">
            {labels.profileOptions.map((option) => (
              <label key={option} className="toggle-chip">
                <input type="radio" name="profile" value={option} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor={id("eventType")} className="field-label">
            {labels.eventType}
          </label>
          <select id={id("eventType")} name="eventType" defaultValue="" className="input">
            <option value="" disabled>
              {labels.eventTypePlaceholder}
            </option>
            {labels.eventTypes.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor={id("date")} className="field-label">
            {labels.date}
          </label>
          <input id={id("date")} name="date" type="text" placeholder={labels.datePlaceholder} className="input" />
        </div>
        <div className="field">
          <label htmlFor={id("city")} className="field-label">
            {labels.city}
          </label>
          <input id={id("city")} name="city" type="text" autoComplete="address-level2" placeholder={labels.cityPlaceholder} className="input" />
        </div>
        <div className="field">
          <label htmlFor={id("guests")} className="field-label">
            {labels.guests}
          </label>
          <select id={id("guests")} name="guests" defaultValue="" className="input">
            <option value="" disabled>
              {labels.guestsPlaceholder}
            </option>
            {labels.guestsOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <fieldset className="field sm:col-span-2">
          <legend className="field-label">{labels.services}</legend>
          <p className="field-hint mb-3">{labels.servicesHint}</p>
          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <label key={s.id} className="toggle-chip">
                <input type="checkbox" name="services" value={s.id} />
                <span>{s.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field sm:col-span-2">
          <label htmlFor={id("budget")} className="field-label">
            {labels.budget} <span className="font-normal text-fg-subtle">· {labels.optional}</span>
          </label>
          <p id={id("budget-hint")} className="field-hint -mt-1">
            {labels.budgetHint}
          </p>
          <select id={id("budget")} name="budget" defaultValue="" aria-describedby={id("budget-hint")} className="input">
            <option value="" disabled>
              {labels.budgetPlaceholder}
            </option>
            {labels.budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="field sm:col-span-2">
          <label htmlFor={id("message")} className="field-label">
            {labels.message}
          </label>
          <textarea id={id("message")} name="message" rows={5} placeholder={labels.messagePlaceholder} className="input" />
        </div>

        {/* Honeypot, invisible to people and assistive tech. */}
        <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
          <label>
            Website
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="field sm:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 text-sm text-fg-muted">
            <input
              type="checkbox"
              name="consent"
              value="yes"
              required
              aria-invalid={errors.consent ? true : undefined}
              aria-describedby={errors.consent ? id("consent-error") : undefined}
              className="mt-0.5 size-5 shrink-0 cursor-pointer accent-[var(--color-volt)]"
            />
            <span>
              {labels.consentBefore}{" "}
              <Link href={privacyHref} className="text-white underline decoration-volt underline-offset-4">
                {labels.consentLink}
              </Link>
              . <span className="text-volt" aria-hidden="true">*</span>
            </span>
          </label>
          {fieldError("consent")}
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-[var(--radius-sm)] border border-[#ff9d82]/40 bg-[#ff9d82]/10 px-4 py-3 text-sm text-white">
          {labels.error.replace("{email}", email)}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row sm:items-center">
        {endpoint ? (
          <button type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"}>
            <span>{status === "sending" ? labels.sending : labels.submit}</span>
            <ArrowRight className="btn-icon" />
          </button>
        ) : (
          <>
            {whatsapp && (
              <button type="submit" name="channel" value="whatsapp" className="btn btn-primary btn-lg">
                <WhatsApp className="btn-icon" />
                <span>{labels.submitWhatsapp}</span>
              </button>
            )}
            <button type="submit" name="channel" value="email" className={`btn btn-lg ${whatsapp ? "btn-secondary" : "btn-primary"}`}>
              <Mail className="btn-icon" />
              <span>{labels.submitEmail}</span>
            </button>
          </>
        )}
      </div>
      {!endpoint && <p className="mt-4 text-sm text-fg-subtle">{labels.fallbackNote}</p>}
    </form>
  );
}
