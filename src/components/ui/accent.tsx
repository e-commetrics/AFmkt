import { Fragment } from "react";

/**
 * Renders copy with light markup used in the dictionaries:
 *   *text*  → italic serif accent (the brand's "en buenas manos" voice)
 *   \n      → line break
 */
export function Accent({ text, className = "display-accent" }: { text: string; className?: string }) {
  const parts = text.split("*");
  return (
    <>
      {parts.map((part, i) => {
        const lines = part.split("\n");
        const content = lines.map((line, j) => (
          <Fragment key={j}>
            {j > 0 && <br />}
            {line}
          </Fragment>
        ));
        return i % 2 === 1 ? (
          <em key={i} className={className}>
            {content}
          </em>
        ) : (
          <Fragment key={i}>{content}</Fragment>
        );
      })}
    </>
  );
}

/** Same text without markup, for metadata and aria labels. */
export function plain(text: string): string {
  return text.replaceAll("*", "").replaceAll("\n", " ");
}
