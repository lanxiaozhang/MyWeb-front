<template>
  <div class="blog-page">
    <h1>我的博客</h1>
    <div class="list">
      <div class="item" v-for="b in list" :key="b.id">
        <h2>{{ b.title }}</h2>
        <p class="content">{{ b.content.substring(0, 100) }}...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getBlogList } from '../api'
const list = ref([])

onMounted(async () => {
  const res = await getBlogList()
  list.value = res.data
})
</script>

<style scoped>
.blog-page {
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
</style>