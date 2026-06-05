<template>
  <nav class="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/project">项目</router-link>
    <router-link to="/blog">博客</router-link>
    <router-link to="/admin">后台管理</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
.nav {
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  background: #222;
}

.nav a {
  color: white;
  text-decoration: none;
}
</style>