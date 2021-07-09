<template>
  <div>
    <el-button type="primary" size="small" @click="numAdd">点击</el-button>
    {{ data.num }}
    <el-button type="primary" size="small" @click="refNumAdd">ref++</el-button>{{ num }}
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";

let data = reactive({ num: 0 });
const numAdd = () => {
  data.num++;
};

let num = ref(0);
const refNumAdd = () => {
  num.value++;
};
</script>

<style scoped></style>
