# collapseMultiline

연속되는 줄바꿈이 지정된 최대 줄 수가 넘어가면 최대 줄 수로 치환합니다.

```ts
collapseMutiline(대상문자열, [최대 줄 수 = 2]);
collapseMutiline("hello\n\n\n\n@@@\n###", 2); // "hello\n\n@@@\n###"
```