import { calculateCharacteres } from "./../../features/calculate-characters/function/main.ts";

try {
  const response = calculateCharacteres(Deno.args);
  console.log(response);
} catch (error: any) {
  console.error("ERROR: " + error.message);
}
