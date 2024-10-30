import { assertEquals, assertThrows } from "jsr:@std/assert";
import { removeDashFromFlags } from "./remove-dash-from-flags.ts";

Deno.test("It should remove dashes from all flags", () => {
  const testFlags: string[] = ["--no-spaces", "--words", "--hello", "--test"];

  const formattedFlags: string[] = removeDashFromFlags(testFlags);

  const areAllTagsWithoutDashesAtTheBeggining: boolean = !formattedFlags.every(
    (flag) => {
      flag.startsWith("--");
    },
  );

  assertEquals(areAllTagsWithoutDashesAtTheBeggining, true);
});

Deno.test("It should throw an error when flags are empty", () => {
  const testFlags: string[] = [];

  assertThrows(() => {
    removeDashFromFlags(testFlags);
  });
});
