<template>
  <div>
    <div class="nav-div">
      <a href="/" class="nav-logo">Icarus</a>
      <Menu class="menu-component" />
      <PersonalInfo class="personal-info" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./Menu.vue";
import PersonalInfo from "./PersonalInfo.vue";
</script>

<style scoped>
.nav-logo {
  color: #000;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1.5em;
  margin-right: 0.5em;
  display: inline-block;
}

.nav-logo:first-letter {
  color: #ee2433 !important;
  font-weight: 700;
}
.nav-div {
  height: 49px;
  padding: 0 80px;
  border-bottom: 1px solid #ddd;
  line-height: 49px;
}
.personal-info {
  float: right;
}
.menu-component {
  float: left;
}
</style>
