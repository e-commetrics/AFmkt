import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, strokeWidth = 1.6, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowUpRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const ArrowDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 4v15M6 13l6 6 6-6" />
  </Icon>
);

export const Plus = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const Check = (p: IconProps) => (
  <Icon {...p}>
    <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
  </Icon>
);

export const Minus = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 12h12" />
  </Icon>
);

export const Mail = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Icon>
);

export const MapPin = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);

export const Clock = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Icon>
);

export const Menu = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 8h16M4 16h16" />
  </Icon>
);

export const Close = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const ChevronDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9 6 6 6-6" />
  </Icon>
);

export const Calendar = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </Icon>
);

export const Users = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="9" cy="8.5" r="3.5" />
    <path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5M16 5.2a3.5 3.5 0 0 1 0 6.6M18 14.7c2 .7 3.2 2.5 3.5 5.3" />
  </Icon>
);

export const Shield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.3 7.5 9.5 4.3-1.2 7.5-5 7.5-9.5V6L12 3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Icon>
);

export const Spark = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </Icon>
);

export const WhatsApp = (p: IconProps) => (
  <Icon {...p}>
    <path d="M20.5 11.8a8.5 8.5 0 0 1-12.5 7.5L3.5 20.5l1.2-4.2a8.5 8.5 0 1 1 15.8-4.5Z" />
    <path
      d="M9.2 7.9c.3-.3.8-.3 1 .1l.9 1.8c.1.3.1.6-.1.8l-.6.7c.6 1.3 1.6 2.3 2.9 2.9l.7-.6c.2-.2.5-.3.8-.1l1.8.9c.4.2.4.7.1 1l-.8.8c-.6.6-1.6.8-2.4.4a10.5 10.5 0 0 1-4.9-4.9c-.4-.8-.2-1.8.4-2.4l.8-.8Z"
      fill="currentColor"
      stroke="none"
    />
  </Icon>
);

export const Instagram = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </Icon>
);

export const Facebook = (p: IconProps) => (
  <Icon {...p}>
    <path d="M14.5 8.5H17V4.8h-2.6c-2.7 0-4.1 1.7-4.1 4.2v2.2H7.8v3.6h2.5V21h3.7v-6.2h2.7l.5-3.6H14V9.4c0-.6.2-.9.5-.9Z" />
  </Icon>
);

export const LinkedIn = (p: IconProps) => (
  <Icon {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M8 10.5V16.5M8 7.6v.1M11.5 16.5v-6M11.5 13c0-1.6 1.1-2.6 2.5-2.6s2.3 1 2.3 2.6v3.5" />
  </Icon>
);

export const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: LinkedIn,
} as const;
