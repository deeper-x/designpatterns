import { assertEquals } from "https://deno.land/std@0.141.0/testing/asserts.ts";
import { Factory } from "./index.ts";

Deno.test("create bank account", () => {
  const bx = Factory.createBank("x", "1", "10", 10000);
  const id = bx.ID;
  const expected = "1";

  assertEquals(id, expected);
});
