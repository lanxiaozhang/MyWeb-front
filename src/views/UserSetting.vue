<template>
  <div class="user-setting">
    <h1>个人设置</h1>
    <div class="card">
      <p>用户名：{{ username }}</p>
      <p>可在这里修改密码、头像等信息</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const username = ref('')

onMounted(() => {
  username.value = localStorage.getItem('user') || '管理员'
})
</script>

<style scoped>
.user-setting {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>