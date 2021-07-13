<template>
  <div class="menu-div">
    <el-menu
      :default-active="menuIndex"
      :router="true"
      class="menu-list"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/home">论坛</el-menu-item>
      <el-menu-item index="/wiki">百科 </el-menu-item>
      <el-menu-item index="/setting">设置</el-menu-item>
      <el-menu-item index="/admin">管理</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

const handleSelect = function() {};
const routerPath = useRoute();
const menuIndex = ref(routerPath.fullPath);
</script>

<style lang="scss" scoped>
.menu-div {
  margin-left: 16px;
  ::v-deep .el-menu--horizontal > .el-menu-item {
    height: 49px;
    line-height: 49px;
  }
  ::v-deep .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 49px;
    line-height: 49px;
  }
  ::v-deep .el-menu.el-menu--horizontal {
    border: 0;
  }
}
</style>
