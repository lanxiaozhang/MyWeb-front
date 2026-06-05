<template>
  <div class="login">
    <h2>后台登录</h2>
    <div class="form">
      <input v-model="username" placeholder="账号" />
      <input v-model="password" placeholder="密码" type="password" />
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
    router.push('/admin')
  } else {
    alert(res.msg)
  }
}
</script>

<style>
.login {
  max-width: 300px;
  margin: 100px auto;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 8px;
}

button {
  padding: 8px;
  background: #42b983;
  color: white;
  border: none;
}
</style>