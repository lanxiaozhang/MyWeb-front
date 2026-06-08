<template>
  <div class="admin-page">
    <h1>后台管理</h1>
    <div class="menu-bar">
      <div class="menu">
        <router-link to="/admin/project">项目管理</router-link>
        <router-link to="/admin/blog">博客管理</router-link>
        <router-link to="/admin/skill">技能管理</router-link>
        <router-link to="/admin/message">留言管理</router-link>
      </div>
      <button class="logout" @click="logout">退出登录</button>
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style>
.admin-page {
  padding: 20px;
}

.menu-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.menu {
  display: flex;
  gap: 12px;
}

.menu a {
  padding: 8px 12px;
  background: #42b983;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}

.logout {
  padding: 8px 12px;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>