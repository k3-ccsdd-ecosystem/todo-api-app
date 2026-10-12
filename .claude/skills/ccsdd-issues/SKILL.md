---
name: ccsdd-issues
description: タスク一覧から自リポジトリ分の Issue を起票する（3-6）。TASK-n と REQ-n を継承する。
---

前提: `gh` で対象リポジトリに書き込める。spec リポジトリの `02-design/tasks.md` を読める

1. `tasks.md` から対象リポジトリ（app / infra）のタスクを抽出する
2. 起票済みの TASK-n（Issue タイトルに含まれる）を `gh issue list --search` で確認し、重複を避ける
3. 各タスクを Issue にする: タイトル `TASK-n: <タスク名>`、本文の先頭行 `REQ: REQ-…`、対象 DES、受け入れ基準、依存する Issue、推定工数。ラベル `ccsdd`
4. 起票結果（TASK-n と Issue 番号の対応）を `ccsdd/records/issues.md` に書く
