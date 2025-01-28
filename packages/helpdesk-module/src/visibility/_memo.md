# PageVisibility 

> [코드](./)

## 사용법

```typescript
  const visibility = new PageVisibility();
  visibility.init();
  visibility.observeState().subscribe((state: VisibilityState) => {
    console.log(state); // { isHidden: true | false ... }
  });
```

```typescript

const listener = new Subscription();
const visibility = new PageVisibility();

const onChangeVisibility = (state: VisibilityState) => {
  console.log(state); // { isHidden: true | false ... }
}

onMounted(() => {
  visibility.init();
  listener.add(visibility.observeState().subscribe(onChangeVisibility);
});

onUnmounted(() => {
  listener.unsubscribe();
});
```

# VisibilityIdle

> [코드](./)

화면의 비활성화(탭 전환, 창 최소화, 새 스택뷰 열림, 웹뷰 비활성화) 여부와 시간을 알기 위한 용도

사용 예) 30분 동안 비활성화 상태였다가 다시 활성화 되었다면 컨텐츠를 갱신해준다.

***


```ts
// react 구현 예시
import { useEffect, useRef } from 'react';
import { VisibilityIdle } from '../core/VisibilityIdle';
import { VisibilityIdleState } from '../core/types';

type CallbackVisibility = (state: VisibilityIdleState) => void;

export const useVisibilityIdle = () => {
  const fnCallbackIdle = useRef<CallbackVisibility>();
  const fnCallbackVisible = useRef<CallbackVisibility>();

  const onVisibilityIdle = (callback: CallbackVisibility) => {
    fnCallbackIdle.current = callback;
  };

  const onVisibilityVisible = (callback: CallbackVisibility) => {
    fnCallbackVisible.current = callback;
  };

  useEffect(() => {
    const idle = new VisibilityIdle();
    idle.init();
    const observeIdle = idle.observeIdle().subscribe((state) => {
      fnCallbackIdle.current?.(state);
    });
    const observeVisible = idle.observeVisible().subscribe((state) => {
      fnCallbackVisible.current?.(state);
    });
    return () => {
      idle.destroy();
      observeIdle.unsubscribe();
      observeVisible.unsubscribe();
    };
  }, []);

  return {
    onVisibilityIdle,
    onVisibilityVisible,
  };
};
```

```ts
// vue 구현 예시
import { Subscription } from 'rxjs';
import { inject, onUnmounted, provide } from '@vue/composition-api';
import { VisibilityIdle } from './VisibilityIdle';
import { IdleState } from './types';

const VisibilityIdleToken = Symbol('VisibilityIdleToken');

type CallbackVisibility = (state: IdleState) => void;

export const provideVisibilityIdle = () => {
  const visibilityIdle = new VisibilityIdle();
  visibilityIdle.init();
  provide(VisibilityIdleToken, visibilityIdle);
};

export const useVisibilityIdle = () => {
  const idle = inject<VisibilityIdle>(VisibilityIdleToken);
  let listener = new Subscription();
  let fnCallbackIdle: CallbackVisibility = state => {};
  let fnCallbackVisible: CallbackVisibility = state => {};

  const onVisibilityIdle = (callback: CallbackVisibility) => {
    fnCallbackIdle = callback;
  };

  const onVisibilityVisible = (callback: CallbackVisibility) => {
    fnCallbackVisible = callback;
  };

  listener.add(idle.observeIdle().subscribe(state => fnCallbackIdle(state)));
  listener.add(idle.observeVisible().subscribe(state => fnCallbackVisible(state)));

  onUnmounted(() => {
    listener.unsubscribe();
    listener = null;
  });

  return {
    onVisibilityIdle,
    onVisibilityVisible
  };
};
```