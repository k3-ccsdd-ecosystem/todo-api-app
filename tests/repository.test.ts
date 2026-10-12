import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TodoRepository } from "../src/repository.js";

let repo: TodoRepository;
beforeEach(() => {
  repo = new TodoRepository(":memory:");
});
afterEach(() => {
  repo.close();
});

describe("TodoRepository", () => {
  it("TC-1 REQ-1: create は id と createdAt を持つ Todo を保存して返す", () => {
    const todo = repo.create("牛乳を買う", new Date("2026-10-12T00:00:00Z"));
    expect(todo.id).toMatch(/[0-9a-f-]{36}/);
    expect(todo.createdAt).toBe("2026-10-12T00:00:00.000Z");
    expect(todo.completed).toBe(false);
    expect(repo.find(todo.id)).toEqual(todo);
  });

  it("TC-2 REQ-3: list は作成日時の降順で全件返す", () => {
    repo.create("古い", new Date("2026-10-10T00:00:00Z"));
    repo.create("新しい", new Date("2026-10-12T00:00:00Z"));
    repo.create("中間", new Date("2026-10-11T00:00:00Z"));
    expect(repo.list().map((t) => t.title)).toEqual(["新しい", "中間", "古い"]);
  });

  it("TC-3 REQ-4: complete は完了状態と完了日時を記録する", () => {
    const todo = repo.create("レビュー");
    const done = repo.complete(todo.id, new Date("2026-10-12T01:00:00Z"));
    expect(done?.completed).toBe(true);
    expect(done?.completedAt).toBe("2026-10-12T01:00:00.000Z");
  });

  it("TC-4 REQ-5: 存在しない id の complete は null を返す", () => {
    expect(repo.complete("missing")).toBeNull();
  });

  it("TC-5 REQ-7: ファイル DB は再オープン後も Todo を保持する", () => {
    const dir = mkdtempSync(join(tmpdir(), "todo-"));
    const path = join(dir, "todo.sqlite");
    const first = new TodoRepository(path);
    const todo = first.create("永続化");
    first.close();
    const second = new TodoRepository(path);
    expect(second.list()).toEqual([todo]);
    second.close();
    rmSync(dir, { recursive: true, force: true });
  });
});
