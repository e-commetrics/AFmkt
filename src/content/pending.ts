/**
 * Sections whose content is still a draft (marked PENDING in the dictionaries).
 * They are shown on the site. Set a flag to `true` to hide that section
 * everywhere until the real content arrives.
 */
export const pending = {
  /** Case studies: real client list and verified metrics. Also hides "Proyectos" links. */
  caseStudies: false,
  /** Client testimonials: real, approved quotes. */
  testimonials: false,
  /** Founding story (About page) and Adrián's quote (home). */
  foundingStory: false,
} as const;
