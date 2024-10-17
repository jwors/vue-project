<script setup lang="ts">
import { testInterFace } from './api';
const cliclBtn = async () => {
  const result = await testInterFace();
  console.log(result)
}

</script>

<template>
  <button class="bg-indigo-500 text-zinc-50" @click="cliclBtn">demo</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
