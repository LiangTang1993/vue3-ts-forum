

<template>
  <div class="main-container">
    <div class="signin">
      <h3>注册</h3>
      <el-form :model="form" ref="form"   label-position="top" size="normal" class="sigin-form">
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="form.nickname"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="form.password2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  email:'',
  nickname:'',
  password: '',
  password2: '',
  verify: '',
  agreeLicense: true,
  returning: true
})
const onSubmit = ()=>{
  
}

</script>

<style scoped>
.main-container{
  display: flex;
  justify-content: center;
}
.signin{
  width: 320px;
  text-align: center;
  margin-top: 32px;
}
.sigin-form{
  border: 1px solid #cccccc;
  padding:  16px;
  box-sizing: border-box;
}
</style>