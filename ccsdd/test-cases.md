# テストケース（5-4、5-5）

| TC | 種別 | 内容 | 期待結果 | 参照 REQ |
|---|---|---|---|---|
| TC-1 | 単体 | create が id と createdAt を持つ Todo を保存して返す | find で同じ Todo が取れる | REQ-1 |
| TC-2 | 単体 | list が作成日時の降順で全件返す | 新しい順に並ぶ | REQ-3 |
| TC-3 | 単体 | complete が完了状態と完了日時を記録する | completed=true、completedAt が設定される | REQ-4 |
| TC-4 | 単体 | 存在しない id の complete | null | REQ-5 |
| TC-5 | 単体 | ファイル DB の再オープン後に Todo が残る | list が同じ Todo を返す | REQ-7 |
