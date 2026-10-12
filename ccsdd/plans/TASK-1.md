# 実装計画: TASK-1 Todo エンティティと SQLite の永続化

- 対象: DES-2, DES-3, DES-9 / REQ-1, REQ-3, REQ-4, REQ-7
- 変更するファイル: `src/todo.ts`（エンティティと検証）、`src/repository.ts`（SQLite リポジトリ）、`tests/repository.test.ts`
- 手順
  1. `Todo` 型と `validateTitle`（REQ-2 の検証本体。API 側は TASK-2）
  2. `TodoRepository`: `node:sqlite` の `DatabaseSync`。`create` / `list`（created_at 降順）/ `find` / `complete`
  3. テスト TC-1〜TC-5（REQ-1, 3, 4, 5, 7）
- 完了条件: `npm run lint`、`npm run typecheck`、`npm test` が成功。TC-5 でファイル DB の再オープン後に保持されること
- 承認: 保留（ユーザー承認待ち）
