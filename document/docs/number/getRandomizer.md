# getRandomizer

seed 지정시 가급적 편향되지 않는 난수 생성기를, 미저정시 Math.random 을 반환합니다.

```ts
// @see https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
getRandomizer(seed); // 랜덤 생성기
```

```ts
const random = getRandomizer();
random(); // random number
```