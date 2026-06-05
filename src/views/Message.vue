<template>
  <div class="message-page">
    <div class="container">
      <h1 class="page-title">💬 留言板</h1>
      <p class="page-desc">留下你的想法和建议，我会认真查看每一条留言～</p>

      <!-- 留言表单 -->
      <div class="message-form">
        <input v-model="form.name" placeholder="你的称呼" />
        <textarea v-model="form.content" placeholder="请输入留言内容..." rows="5"></textarea>
        <button class="submit-btn" @click="submit">提交留言</button>
      </div>

      <!-- 留言列表 -->
      <div class="message-list">
        <h3 class="list-title">最新留言</h3>

        <div class="message-item" v-for="m in messageList" :key="m.id">
          <div class="avatar">{{ m.name.charAt(0) }}</div>
          <div class="message-content">
            <div class="name">{{ m.name }}</div>
            <div class="content">{{ m.content }}</div>
            <div class="time">{{ m.createTime }}</div>
          </div>
        </div>

        <div v-if="messageList.length === 0" class="empty">暂无留言，快来抢沙发～</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { addMessage, getMessageList } from '../api'

const form = ref({ name: '', content: '' })
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
  await addMessage(form.value)
  alert('留言成功！')
  const res = await getMessageList()
  messageList.value = res.data
  form.value = { name: '', content: '' }
}
</script>

<style scoped>
/* 整体页面 */
.message-page {
  min-height: 100vh;
  background: #f7f8fa;
  padding: 40px 20px;
}

.container {
  max-width: 750px;
  margin: 0 auto;
}

/* 标题 */
.page-title {
  font-size: 32px;
  text-align: center;
  margin: 0 0 10px;
  color: #222;
}

.page-desc {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 15px;
}

/* 表单卡片 */
.message-form {
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 45px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.message-form input,
.message-form textarea {
  padding: 14px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  transition: 0.2s;
}

.message-form input:focus,
.message-form textarea:focus {
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.15);
}

.submit-btn {
  padding: 14px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #36a875;
}

/* 留言列表 */
.message-list {
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
}

.list-title {
  font-size: 18px;
  margin: 0 0 20px;
  color: #333;
}

/* 单条留言 */
.message-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 0;
  border-bottom: 1px solid #f0f0f0;
}

.message-item:last-child {
  border-bottom: none;
}

.avatar {
  width: 40px;
  height: 40px;
  background: #42b983;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.message-content {
  flex: 1;
}

.name {
  font-weight: 600;
  color: #222;
  margin-bottom: 4px;
}

.content {
  color: #444;
  line-height: 1.5;
  margin-bottom: 6px;
}

.time {
  font-size: 12px;
  color: #999;
}

.empty {
  text-align: center;
  padding: 30px 0;
  color: #999;
}
</style>