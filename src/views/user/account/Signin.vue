<template>
  <div class="main-container">
    <div class="signin">
      <h3>登录</h3>
      <el-form :model="form" ref="form" label-position="top" size="normal" class="sigin-form">
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  email: "",
  password: "",
});
const onSubmit = () => {};
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
}
.signin {
  width: 320px;
  text-align: center;
  margin: 16px 0;
}
.sigin-form {
  border: 1px solid #cccccc;
  padding: 16px 32px;
  box-sizing: border-box;
}
</style>
