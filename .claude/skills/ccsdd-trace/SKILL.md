---
name: ccsdd-trace
description: REQ と DES の対応表（2-10）、REQ と試験結果の対応表（5-21）を作り、未対応を検出する。
---

- 2-10: `02-design/*.md` の全 DES とその参照 REQ を集め、`02-design/traceability.md` に REQ ごとの DES 一覧を書く。DES が無い REQ を「未対応」として列挙する
- 5-21: app の `ccsdd/test-cases.md` と試験結果から、REQ ごとの TC と結果を集め、`ccsdd/records/coverage.md` に書く。試験されていない REQ を「未検証」として列挙する
- 未対応・未検証が 0 でない場合、判定に進めないことを明記する
