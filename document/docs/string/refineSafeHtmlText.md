# refineSafeHtmlText

엔티티 코드를 html 태그 문자열로 변경합니다.

```ts
refineSafeHtmlText(소스 문자열, [탭 문자를 제거할지 여부 = true]);
```

```ts
refineSafeHtmlText("&lt;div&gt;1&lt;/div&gt;"); // "<div>1</div>"
```