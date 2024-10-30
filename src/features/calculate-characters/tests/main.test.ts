import { assertEquals } from "jsr:@std/assert";

Deno.test("It should return 10 characters long", async () => {
  const exampleText = "amor massa !";

  const command = new Deno.Command("deno", {
    args: ["task", "dev", exampleText, "--no-spaces"],
    stdout: "piped",
    stderr: "piped",
  });
  const process = command.spawn();

  const { stdout, stderr } = await process.output();

  const decoder = new TextDecoder();
  const output = decoder.decode(stdout);
  const _errors = decoder.decode(stderr);

  const hasErrors = _errors.includes("error");

  if (hasErrors) console.error(_errors);

  assertEquals(hasErrors, false);
  assertEquals(output.trim(), "Characters Long: 10");
});

Deno.test("It should return 12 characters long when not passing --no-spaces flag using the same text", async () => {
  const exampleText = "amor massa !";

  const command = new Deno.Command("deno", {
    args: ["task", "dev", exampleText],
    stdout: "piped",
    stderr: "piped",
  });
  const process = command.spawn();

  const { stdout, stderr } = await process.output();

  const decoder = new TextDecoder();
  const output = decoder.decode(stdout);
  const _errors = decoder.decode(stderr);

  const hasErrors = _errors.includes("error");

  if (hasErrors) console.error(_errors);

  assertEquals(hasErrors, false);
  assertEquals(output.trim(), "Characters Long: 12");
});
