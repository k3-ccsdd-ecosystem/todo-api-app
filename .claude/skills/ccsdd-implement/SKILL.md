---
name: ccsdd-implement
description: Issue 単位に実装を回す（5-7〜5-13）。計画 → 人の承認 → 実装 → 単体試験 → 自己レビュー → PR。
---

1. Issue を読み、対応する TASK・REQ・DES と `ccsdd/` の詳細設計を確認する
2. 実装計画を `ccsdd/plans/TASK-n.md` に書く（変更するファイル、手順、テスト、完了条件）。人の承認を待つ
3. ブランチ `feature/TASK-n` を作り、計画に沿って実装する。テスト名に TC-n と REQ-n を含める
4. lint とテストを実行し、失敗があれば直す
5. 自己レビュー: 設計準拠（DES）、セキュリティ（`rules/security.md`）、規約。指摘は直してから進む
6. コミットし、PR を作る。本文に `TASK-n / REQ-…`、`Closes #<Issue>`、変更点、テスト結果を書く
7. マージ判定（5-13）は人が行う。判定を待つ
