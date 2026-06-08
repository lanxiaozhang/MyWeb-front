<template>
  <div class="login-page">
    <div class="login-box">
      <h2>后台管理登录</h2>
      <input v-model="username" placeholder="请输入账号" />
      <input v-model="password" placeholder="请输入密码" type="password" />
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import request from '../utils/request'

const router = useRouter()
const username = ref('')
const password = ref('')

async function login() {
  const res = await request.post('/login', {
    username: username.value,
    password: password.value
  })

  if (res.code === 200) {
    localStorage.setItem('token', res.token)
    localStorage.setItem('user', username.value)
    router.push('/admin')
  } else {
    alert(res.msg)
  }
}
</script>

<style>
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
}

.login-box {
  width: 320px;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-box h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-box input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.login-box button {
  width: 100%;
  padding: 10px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  margin-top: 10px;
  cursor: pointer;
}
</style>