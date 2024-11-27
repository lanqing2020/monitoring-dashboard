<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <header>
    <div class="head"></div>
    <div class="border1 width100per height1" />
    <div class="border2 width100per height1" />
  </header>

</template>

<style scoped>
header {
  width: 100%;
  height: 57px;
  background-color: white;
  border-radius: 0 15px 0 0;
  .head {
    height: 55px;
    box-shadow: 0 12px 20px rgb(118, 118, 118, 0.05);
  }
  .border1 {
    background: #fafafc;
  }
  .border2 {
    background: #e9ecf4;
  }
}

</style>
