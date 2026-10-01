import { ViewTransition, type ReactNode } from "react";

/**
 * Route change animation (React <ViewTransition> + the View Transitions API):
 * the old page fades out, the new one rises in. The header stays anchored.
 * Browsers without support simply swap pages.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
