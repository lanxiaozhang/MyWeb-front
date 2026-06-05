<template>
  <div class="admin-page">
    <h1>后台管理</h1>

    <!-- 菜单 + 退出按钮 -->
    <div class="menu-box">
      <div class="menu">
        <router-link to="/admin/project">项目管理</router-link>
        <router-link to="/admin/blog">博客管理</router-link>
        <router-link to="/admin/skill">技能管理</router-link>
        <router-link to="/admin/message">留言管理</router-link>
      </div>
      <button class="logout-btn" @click="logout">退出登录</button>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

// 退出登录
function logout() {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style>
.admin-page {
  padding: 20px;
}

/* 菜单 + 退出 布局 */
.menu-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.menu {
  display: flex;
  gap: 12px;
}

.menu a {
  padding: 8px 12px;
  background: #42b983;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}

/* 退出按钮样式 */
.logout-btn {
  padding: 8px 12px;
  background: #f56c6c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.content {
  border: 1px solid #eee;
  padding: 20px;
}
</style>