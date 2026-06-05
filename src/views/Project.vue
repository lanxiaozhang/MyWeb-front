<template>
  <div class="project-page">
    <h1>我的项目</h1>
    <div class="list">
      <div class="item" v-for="p in list" :key="p.id">
        <h2>{{ p.title }}</h2>
        <p class="content">{{ p.content }}</p>
        <a v-if="p.demoUrl" :href="p.demoUrl" target="_blank">演示地址</a>
        <a v-if="p.codeUrl" :href="p.codeUrl" target="_blank">源码地址</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getProjectList } from '../api'
const list = ref([])

onMounted(async () => {
  const res = await getProjectList()
  list.value = res.data
})
</script>

<style scoped>
.project-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.item {
  background: #fafafa;
  margin: 15px 0;
  padding: 20px;
  border-radius: 10px;
}

a {
  margin-right: 10px;
  color: #42b983;
}
</style>