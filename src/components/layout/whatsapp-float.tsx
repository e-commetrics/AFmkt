import { WhatsApp } from "@/components/ui/icons";

/** Floating WhatsApp shortcut on phones and tablets (hidden on desktop). */
export function WhatsAppFloat({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fade-in fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgb(0_0_0/0.6)] transition-transform active:scale-95 lg:hidden"
      style={{ "--d": 1200 } as React.CSSProperties}
    >
      <WhatsApp className="size-7" strokeWidth={1.8} />
    </a>
  );
}
