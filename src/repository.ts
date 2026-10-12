import { randomUUID } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import type { Todo } from "./todo.js";

type Row = {
  id: string;
  title: string;
  completed: number;
  created_at: string;
  completed_at: string | null;
};

const toTodo = (row: Row): Todo => ({
  id: row.id,
  title: row.title,
  completed: row.completed === 1,
  createdAt: row.created_at,
  completedAt: row.completed_at,
});

/** DES-2 / DES-3: SQLite による Todo の永続化 */
export class TodoRepository {
  private readonly db: DatabaseSync;

  constructor(path: string) {
    this.db = new DatabaseSync(path);
    this.db.exec(`CREATE TABLE IF NOT EXISTS todos (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      completed INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL,
      completed_at TEXT
    )`);
  }

  /** REQ-1 */
  create(title: string, now: Date = new Date()): Todo {
    const todo: Todo = {
      id: randomUUID(),
      title,
      completed: false,
      createdAt: now.toISOString(),
      completedAt: null,
    };
    this.db
      .prepare(
        "INSERT INTO todos (id, title, completed, created_at, completed_at) VALUES (?, ?, 0, ?, NULL)",
      )
      .run(todo.id, todo.title, todo.createdAt);
    return todo;
  }

  /** REQ-3: 作成日時の降順 */
  list(): Todo[] {
    const rows = this.db
      .prepare(
        "SELECT id, title, completed, created_at, completed_at FROM todos ORDER BY created_at DESC, rowid DESC",
      )
      .all() as Row[];
    return rows.map(toTodo);
  }

  find(id: string): Todo | null {
    const row = this.db
      .prepare(
        "SELECT id, title, completed, created_at, completed_at FROM todos WHERE id = ?",
      )
      .get(id) as Row | undefined;
    return row ? toTodo(row) : null;
  }

  /** REQ-4: 完了状態と完了日時を記録する。存在しなければ null（REQ-5） */
  complete(id: string, now: Date = new Date()): Todo | null {
    this.db
      .prepare(
        "UPDATE todos SET completed = 1, completed_at = ? WHERE id = ? AND completed = 0",
      )
      .run(now.toISOString(), id);
    return this.find(id);
  }

  close(): void {
    this.db.close();
  }
}
