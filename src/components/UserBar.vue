<template>
  <div class="user-bar">
    <!-- 未登录 → 显示登录按钮 -->
    <button v-if="!token" class="login-btn" @click="goLogin">
      登录
    </button>

    <!-- 已登录 → 显示头像 + 用户名 + 下拉菜单 -->
    <div v-else class="user-info" @click="showMenu = !showMenu">
      <img class="avatar" src="https://picsum.photos/200/200" alt="avatar" />
      <span class="username">{{ username }}</span>

      <!-- 下拉菜单 -->
      <div v-if="showMenu" class="dropdown">
        <div class="item">个人设置</div>
        <div class="item logout" @click="logout">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const token = ref('')
const username = ref('管理员')
const showMenu = ref(false)

onMounted(() => {
  token.value = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if (user) username.value = user
})

// 去登录
function goLogin() {
  router.push('/login')
}

// 退出登录
function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  token.value = ''
  showMenu.value = false
  router.push('/login')
}

// 去个人设置
function goToUserSetting() {
  router.push('/user-setting')
  showMenu.value = false
}
</script>

<style scoped>
.user-bar {
  top: 16px;
  right: 24px;
  z-index: 999;
}

.login-btn {
  padding: 6px 12px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  position: relative;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.username {
  font-size: 14px;
  color: #333;
}

.dropdown {
  position: absolute;
  top: 40px;
  right: 0;
  width: 140px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.item {
  padding: 10px 14px;
  font-size: 14px;
  cursor: pointer;
}

.item:hover {
  background: #f5f5f5;
}

.logout {
  color: #f56c6c;
}
</style>