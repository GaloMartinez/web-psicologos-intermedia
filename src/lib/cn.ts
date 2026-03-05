/** Combines CSS class names, filtering out falsy values. */
export const cn = (...classes: (string | undefined | false | null)[]): string =>
  classes.filter(Boolean).join(" ");
