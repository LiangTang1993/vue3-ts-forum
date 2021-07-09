<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
let props = defineProps({
  message: String,
});
</script>

<style scoped></style>
