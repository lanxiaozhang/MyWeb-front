<template>
  <div class="message-page">
    <h1>留言板</h1>
    <div class="form-box">
      <input v-model="form.name" placeholder="请输入你的名字" />
      <textarea v-model="form.content" placeholder="请输入留言内容"></textarea>
      <button @click="submit">提交留言</button>
    </div>

    <div class="list">
      <h2>留言列表</h2>
      <div class="item" v-for="m in messageList" :key="m.id">
        <div class="name">{{ m.name }}</div>
        <div class="content">{{ m.content }}</div>
        <div class="time">{{ m.createTime }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { addMessage, getMessageList } from '../api'

const form = ref({
  name: '',
  content: ''
})

const messageList = ref([])

onMounted(async () => {
  const res = await getMessageList()
  messageList.value = res.data
})

async function submit() {
  if (!form.value.name || !form.value.content) {
    alert('请填写完整信息')
    return
  }

  const res = await addMessage(form.value)
  alert('留言成功！')

  // 刷新列表
  const res2 = await getMessageList()
  messageList.value = res2.data

  // 清空表单
  form.value = { name: '', content: '' }
}
</script>

<style scoped>
.message-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.form-box {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

input,
textarea {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

button {
  padding: 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.item {
  background: #f9f9f9;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}

.name {
  font-weight: bold;
}

.content {
  margin: 5px 0;
}

.time {
  font-size: 12px;
  color: #666;
}
</style>