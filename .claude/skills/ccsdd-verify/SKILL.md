---
name: ccsdd-verify
description: 要件カバレッジ（5-21）と spec・実装の整合（5-22）を検証し、報告する。
---

1. `ccsdd-trace` の 5-21 を実行し、`ccsdd/records/coverage.md` を作る
2. マージ済みコードと `02-design/*.md`・`tasks.md` を照合し、未実装の DES / TASK、設計に無い実装、変更が必要な設計書を `ccsdd/records/drift.md` に書く
3. 残作業があれば `ccsdd-issues` で追加 Issue を起票する。設計書の更新が必要なら spec 側の修正内容を列挙する
4. 未検証 REQ と未対応の乖離が 0 になったら、`ccsdd-gate 5-23` を提案する
