<template>
  <nav class="nav">
    <!-- 左侧菜单 -->
    <div class="nav-menu">
      <router-link to="/">首页</router-link>
      <router-link to="/project">项目</router-link>
      <router-link to="/blog">博客</router-link>
      <router-link to="/message">留言</router-link>
      <router-link to="/admin">后台管理</router-link>
    </div>
    <div class="nav-user">
      <UserBar />
    </div>
  </nav>

  <router-view />
</template>

<script setup>
import UserBar from './components/UserBar.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 20px;
  height: 60px;
  background: #222;
  position: relative;
  z-index: 10;
}

.nav-menu {
  display: flex;
  gap: 20px;
}

.nav-user {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.nav a {
  color: white;
  text-decoration: none;
}
</style>