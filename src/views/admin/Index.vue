<template>
  <div class="admin-page">
    <h1>后台管理</h1>
    <div class="menu">
      <router-link to="/admin/project">项目管理</router-link>
      <router-link to="/admin/blog">博客管理</router-link>
      <router-link to="/admin/skill">技能管理</router-link>
      <router-link to="/admin/message">留言管理</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style>
.admin-page {
  padding: 20px;
}

.menu {
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
}

.menu a {
  padding: 8px 12px;
  background: #42b983;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}

.content {
  border: 1px solid #eee;
  padding: 20px;
}
</style>