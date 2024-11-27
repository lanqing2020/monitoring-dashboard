<script setup lang="ts">
// defineProps<{
//   msg: string
// }>()
</script>

<template>
  <header>
    <div class="head">这是head内容</div>
  </header>

</template>

<style scoped lang="less">
header {
  width: 100%;
  height: 56px;
  background-color: white;
  border-radius: 0 15px 0 0;
  .head {
    width: 100%;
    height: 55px;
    box-shadow: 0 12px 20px rgba(118, 118, 118, 0.05);
    border-bottom: 1px solid #fafafc;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: #e9ecf4;
      left: 0;
      bottom: -2px;
    }
  }
}

</style>
