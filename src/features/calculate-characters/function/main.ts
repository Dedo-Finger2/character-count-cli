import { removeDashFromFlags } from "./../../../utils/remove-dash-from-flags.ts";
import { splitInputFromFlags } from "./../../../utils/split-input-from-flags.ts";

export function calculateCharacteres(args: string[]) {
  let { input, flags } = splitInputFromFlags(args);

  if (input === null || input.length === 0) {
    throw new Error("Text cannot be empty.");
  }

  if (flags.length > 0 && removeDashFromFlags(flags).includes("no-spaces")) {
    input = input.replaceAll(" ", "");
  }

  const charactersLong = input.trim().length;

  return "Characters Long: " + charactersLong;
}
