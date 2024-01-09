<script setup>
import ExampleManualTypist from './components/ExampleManualTypist.vue'
</script>

# hangul-typist

## ManualTypist

문자(한글) 입력기

```ts
import { typingMatrix } from '@jood/helpdesk-module/hangul-core';
import { ManualTypist } from '@jood/helpdesk-module/hangul-typist';

const source = `안녕하세요. 반갑습니다 😎
가끔 필요할때가 있어서 만들어 둡니다~`;

const manual = new ManualTypist();
manual.observe().subscribe((evt) => {
  console.log(evt);
});
manual.setSourceMatrix(typingMatrix(source));
manual.setTypingSpeed(30, 40);
manual.addDelayByEqual('\n', 120);
manual.addDelayByEqual('.', 100);
manual.start();
// manual.pause();
// manual.resume();
// manual.destroy();
```

<ExampleManualTypist />

<<< ./components/ExampleManualTypist.vue