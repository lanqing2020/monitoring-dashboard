<script setup lang="ts">
import CompHeader from './components/CompHeader.vue'
import {reactive} from "vue";
import CompSidebar from "@/components/CompSidebar.vue";
import Content from "@/views/Content.vue";
</script>

<template>
  <div class="container flex-layout">
    <CompSidebar />
    <main>
      <CompHeader />
      <Content />
    </main>
  </div>
</template>

<style scoped lang="less">
.container {
  width: 1495px;
  height: calc(100vh - 100px);
  justify-content: flex-start;
  margin: 0 auto;
  border-radius: 15px;
  main {
    flex: 1;
    background-color: #f8f7fc;
    border-radius: 0 15px 15px 0;
  }
}

</style>
