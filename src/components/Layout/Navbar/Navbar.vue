<template>
  <div>
    <el-row class="nav-div" :gutter="20">
      <el-col :span="12" :offset="0">
        <a href="/" class="nav-logo">Icarus</a>
      </el-col>
      <el-col :span="12" :offset="0"></el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-logo{
  color: #000;
    text-decoration: none;
    white-space: nowrap;
    font-size: 1.5em;
    margin-right: .5em;
}

.nav-logo:first-letter {
  color: #ee2433!important;
  font-weight: 700;
}
.nav-div {
  height: 50px;
}
</style>
