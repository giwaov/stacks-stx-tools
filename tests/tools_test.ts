import { describe, it, expect } from "vitest";
import { Cl } from "@stacks/transactions";

describe("stx-tools", () => {
  it("should time-lock STX", () => {
    const result = simnet.callPublicFn("stx-tools", "time-lock", [Cl.uint(1000000), Cl.uint(100)], wallet1);
    expect(result.result).toBeOk(Cl.uint(1));
  });

  it("should prevent early withdrawal", () => {
    simnet.callPublicFn("stx-tools", "time-lock", [Cl.uint(1000000), Cl.uint(100)], wallet1);
    const result = simnet.callPublicFn("stx-tools", "withdraw-locked", [Cl.uint(1)], wallet1);
    expect(result.result).toBeErr(Cl.uint(4));
  });
});
