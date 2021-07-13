
<template>
  <div>
    <el-button type="text" @click="regist">注册</el-button>
    <el-button type="text" @click="login">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

const regist = function() {
  router.push({path:'/signin'})
};
const login = function() {
  router.push({path:'/signup'})
};
</script>

<style scoped></style>
