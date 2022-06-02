import { assertEquals } from "https://deno.land/std@0.141.0/testing/asserts.ts";
import { Factory } from "./index.ts";

Deno.test("create bank x account", () => {
  const bx = Factory.createBank("x", "1", "10", 10000);
  const id = bx.ID;
  const expected = "1";

  assertEquals(id, expected);
});

Deno.test("withdrawal", () => {
  const b = Factory.createBank("boo", "1", "10", 10000);
  let res: number = b.withdrawal(100);
  let expected = 9900;

  assertEquals(res, expected);
});

Deno.test("deposit", () => {
  const by = Factory.createBank("y", "1", "10", 10000);
  const res: number = by.deposit(1000);
  const expected = 11000;

  assertEquals(res, expected);
});
