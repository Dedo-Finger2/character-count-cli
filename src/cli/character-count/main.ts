import { calculateCharacteres } from "./../../features/calculate-characters/function/main.ts";

const response = calculateCharacteres(Deno.args);

console.log(response);
