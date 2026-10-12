import { describe, expect, it } from "vitest";
import { health } from "../src/index.js";

describe("TC-0 雛形の疎通", () => {
  it("health() は status ok を返す", () => {
    expect(health()).toEqual({ status: "ok" });
  });
});
