import { assertEquals, assertThrows } from "jsr:@std/assert";
import { splitInputFromFlags } from "./split-input-from-flags.ts";

Deno.test("It should split input from flags when passing all args", () => {
  const testArgs: string[] = ["testing input", "--no-spaces"];

  const { input, flags } = splitInputFromFlags(testArgs);

  assertEquals(input, "testing input");
  assertEquals(flags.length, 1);
});

Deno.test("It should split input from multiple flags", () => {
  const testArgs: string[] = [
    "testing input",
    "--no-spaces",
    "--name",
    "--test",
  ];

  const { input, flags } = splitInputFromFlags(testArgs);

  assertEquals(input, "testing input");
  assertEquals(flags.length, 3);
});

Deno.test("It should split input from flags even when passing in a random order", () => {
  const testArgs: string[] = [
    "--no-spaces",
    "--name",
    "testing input",
    "--test",
  ];

  const { input, flags } = splitInputFromFlags(testArgs);

  assertEquals(input, "testing input");
  assertEquals(flags.length, 3);
});

Deno.test("It should throw when args are empty", () => {
  const testArgs: string[] = [];

  assertThrows(() => {
    splitInputFromFlags(testArgs);
  });
});

// type InputAndFlags = {
//   input: string;
//   flags: string[];
// };
//
// export function splitInputFromFlags(args: string[]): InputAndFlags {
//   if (args === null || args.length === 0) {
//     throw new Error("Cannot split input from flags when args are empty.");
//   }
//
//   const flags: string[] = [];
//   let input: string = "";
//
//   for (const arg of args) {
//     if (arg.startsWith("--")) {
//       flags.push(arg);
//     } else {
//       input = arg;
//     }
//   }
//
//   return {
//     input,
//     flags,
//   };
// }
