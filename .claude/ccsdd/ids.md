# ID 規約

| 種別 | 形式 | 付与する工程 | 台帳と本体 |
|---|---|---|---|
| 要件 | REQ-n | 1-19（EARS の 1 文に 1 つ） | `00-ids.md`、`01-planning/requirements-ears.md` |
| 設計要素 | DES-n | 2-2〜2-9（構成要素、エンティティ、IF、セキュリティ境界、インフラ要素、決定） | `00-ids.md`、`02-design/*.md` |
| タスク | TASK-n | 2-17 | `00-ids.md`、`02-design/tasks.md` |
| テストケース | TC-n | 5-4〜5-6 | `ccsdd/test-cases.md`（app） |

- n は種別ごとの通し番号。欠番は再利用しない。次番号は `00-ids.md` で管理する
- 参照の書き方
  - 設計要素: `参照: REQ-1, REQ-4`
  - タスク: `対象: DES-3 / REQ-1`
  - Issue のタイトル: `TASK-12: <小項目>`。本文の先頭行に `REQ: REQ-1, REQ-4`
  - PR の本文: `TASK-12 / REQ-1, REQ-4` と `Closes #<Issue 番号>`
  - テスト: テスト名に `TC-5 REQ-1` を含める
- 1 つの成果物が複数の ID を持つときは、行ごとに ID を分ける（1 行 1 ID）
