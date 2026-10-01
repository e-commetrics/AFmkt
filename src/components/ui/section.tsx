import type { ReactNode } from "react";
import { Accent } from "./accent";

export type Theme = "dark" | "night" | "paper" | "volt";

interface SectionProps {
  id?: string;
  theme?: Theme;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "div" | "article";
}

export function Section({
  id,
  theme = "dark",
  labelledBy,
  className = "",
  children,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      className={`theme-${theme} relative ${className}`}
    >
      {children}
    </Tag>
  );
}

interface SectionHeaderProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  as?: "h1" | "h2";
  size?: "md" | "lg";
  align?: "start" | "split";
  aside?: ReactNode;
  className?: string;
}

/**
 * Eyebrow + headline (+ intro). `title` accepts *accent* markup.
 * `split` puts the intro in a right-hand column on large screens.
 */
export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  as: Heading = "h2",
  size = "md",
  align = "start",
  aside,
  className = "",
}: SectionHeaderProps) {
  const heading = (
    <Heading
      id={id}
      data-reveal
      className={`font-display text-fg ${size === "lg" ? "text-display-lg" : "text-display-md"}`}
    >
      <Accent text={title} />
    </Heading>
  );

  if (align === "split") {
    return (
      <div className={`grid gap-8 lg:grid-cols-12 lg:items-end ${className}`}>
        <div className="lg:col-span-7">
          {eyebrow && (
            <p className="eyebrow mb-6" data-reveal>
              {eyebrow}
            </p>
          )}
          {heading}
        </div>
        <div className="lg:col-span-4 lg:col-start-9" data-reveal style={{ "--d": 120 } as React.CSSProperties}>
          {intro && <div className="lead">{intro}</div>}
          {aside}
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-4xl ${className}`}>
      {eyebrow && (
        <p className="eyebrow mb-6" data-reveal>
          {eyebrow}
        </p>
      )}
      {heading}
      {intro && (
        <div className="lead mt-7 max-w-2xl" data-reveal style={{ "--d": 120 } as React.CSSProperties}>
          {intro}
        </div>
      )}
      {aside}
    </div>
  );
}
