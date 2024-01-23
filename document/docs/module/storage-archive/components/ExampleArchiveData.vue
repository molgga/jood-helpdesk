<template>
  <div>
    <div>3초 동안 저장합니다.</div>
    <div>
      {{ state }}
    </div>
    <el-button @click="save">save</el-button>
    <el-button @click="expired">update expired</el-button>
    <el-button @click="clear">clear</el-button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { ArchiveData } from '@jood/helpdesk-module/storage-archive';

interface MyData {
  foo: string;
  bar: number;
  savedAt: number;
}

const state = reactive({
  foo: '',
  bar: 0,
  savedAt: 0,
});

let archive: ArchiveData<MyData>;

const save = () => {
  archive.set({
    foo: new Date().toLocaleString(),
    bar: Math.round(Math.random() * 999999),
    savedAt: Date.now(),
  });
  updateMyState();
};

const clear = () => {
  archive.clear();
  updateMyState();
};

const expired = () => {
  archive.clearByExpired(); // expire 된게 있다면 제거
  updateMyState();
};

const updateMyState = () => {
  const { data } = archive.get() || {};
  const { foo = '', bar = 0, savedAt = 0 } = data || {};
  state.foo = foo;
  state.bar = bar;
  state.savedAt = savedAt;
};

onMounted(() => {
  archive = new ArchiveData<MyData>(typeof window !== 'undefined' ? window.localStorage : null);
  archive.init({
    key: 'my-storage-key', // 저장키
    dataExpire: 1000 * 3, // 3초
  });
  expired();
});
</script>

<style lang="scss" scoped></style>
