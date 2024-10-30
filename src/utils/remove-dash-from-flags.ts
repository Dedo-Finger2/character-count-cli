export function removeDashFromFlags(flags: string[]): string[] {
  if (flags !== null && flags.length === 0) {
    throw new Error("Cannot remove dashes from empty flags.");
  }

  const newFlags: string[] = [];

  for (const flag of flags) {
    newFlags.push(flag.replaceAll("--", " ").trim());
  }

  return newFlags;
}
