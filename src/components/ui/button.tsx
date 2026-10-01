import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Mail, WhatsApp } from "./icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";
type IconName = "arrow" | "external" | "whatsapp" | "mail" | "none";

interface ButtonLinkProps extends Omit<ComponentProps<"a">, "href"> {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  children: ReactNode;
}

const iconFor: Record<Exclude<IconName, "none">, (p: { className: string }) => ReactNode> = {
  arrow: (p) => <ArrowRight {...p} />,
  external: (p) => <ArrowUpRight {...p} />,
  whatsapp: (p) => <WhatsApp {...p} />,
  mail: (p) => <Mail {...p} />,
};

export function buttonClass(variant: Variant = "primary", size: Size = "md", extra = "") {
  return [
    "btn",
    `btn-${variant}`,
    size === "sm" ? "btn-sm" : size === "lg" ? "btn-lg" : "",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Link styled as a button. Internal paths use next/link (prefetch, view
 * transitions); external URLs open in a new tab.
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon = "arrow",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const leading = icon === "whatsapp" || icon === "mail";
  const iconNode =
    icon === "none"
      ? null
      : iconFor[icon]({
          className: `btn-icon ${icon === "external" ? "btn-icon-diag" : ""}`,
        });
  const content = (
    <>
      {leading && iconNode}
      <span>{children}</span>
      {!leading && iconNode}
    </>
  );
  const cls = buttonClass(variant, size, className);

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {content}
    </Link>
  );
}
