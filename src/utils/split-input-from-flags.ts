type InputAndFlags = {
  input: string;
  flags: string[];
};

export function splitInputFromFlags(args: string[]): InputAndFlags {
  if (args === null || args.length === 0) {
    throw new Error("Cannot split input from flags when args are empty.");
  }

  const flags: string[] = [];
  let input: string = "";

  for (const arg of args) {
    if (arg.startsWith("--")) {
      flags.push(arg);
    } else {
      input = arg;
    }
  }

  return {
    input,
    flags,
  };
}
