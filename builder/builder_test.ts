import { Deploy, Sysadmin } from "./index.ts";
import { assertFalse } from "https://deno.land/std@0.142.0/testing/asserts.ts";

Deno.test("deploy test", () => {
  const app: Deploy = Sysadmin.run();
  const ok: boolean = app.checkInstall();

  assertFalse(!ok);
});
