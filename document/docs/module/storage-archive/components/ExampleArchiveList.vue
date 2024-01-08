<template>
  <div>
    <div class="actions">
      <div class="add-keyword">
        <el-input v-model="state.addKeyword" placeholder="keyword" @keyup.enter="save" />
        <el-button class="action" @click="save">add</el-button>
      </div>
      <el-button class="action" @click="expired">update expired</el-button>
    </div>
    <div class="keyword-list">
      <div v-for="data in state.list" class="keyword-item">
        <div>{{ data.keyword }}</div>
        <button class="remove" @click="removeByKeyword(data.keyword)">X</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ArchiveList } from '@jood/helpdesk-module/storage-archive';
import { ArchiveExistProcessType } from '@jood/helpdesk-module/storage-archive/types';

interface MyData {
  keyword: string;
}

const state = reactive({
  addKeyword: '',
  list: [],
});

const archive = new ArchiveList<MyData>(window.localStorage);
archive.init({
  key: 'my-storage-key',
  dataExpire: 1000 * 60 * 3, // 3분
  max: 3, // 최대 3개
  existProcessType: ArchiveExistProcessType.UPDATE, // 중복 데이터인 경우 expire 업데이트
  findExist: (target, existList) => {
    // 중복 체크는 직접.
    return existList.findIndex((exist) => {
      return target.keyword === exist.data.keyword;
    });
  },
});

const save = () => {
  if (!state.addKeyword) return;
  archive.unshift({ keyword: state.addKeyword });
  updateMyState();
  state.addKeyword = '';
};

const expired = () => {
  archive.clearByExpired();
  updateMyState();
};

const removeByKeyword = (keyword: string) => {
  const findIndex = archive.getList().findIndex((row) => row.data?.keyword === keyword);
  if (-1 < findIndex) {
    archive.removeByIndex(findIndex);
  }
  updateMyState();
};

const updateMyState = () => {
  state.list = archive.getList().map((row) => row.data);
};

expired();
</script>

<style lang="scss" scoped>
.keyword-list {
  display: flex;
  flex-wrap: wrap;
  .keyword-item {
    display: flex;
    margin: 2px;
    padding: 2px 6px;
    border: 1px solid #ccc;
    border-radius: 5px;
    .remove {
      margin-left: 3px;
      color: #f00;
    }
  }
}
.actions {
  display: flex;
  align-items: center;
  .action {
    margin-left: 5px;
  }
  .add-keyword {
    display: inline-flex;
  }
}
</style>
