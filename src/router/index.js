import { createRouter, createWebHistory } from 'vue-router'

// 前台页面
import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import Project from '../views/Project.vue'

// 登录页面（必须导入！）
import Login from '../views/Login.vue'

// 后台页面
import BlogAdmin from '../views/admin/BlogAdmin.vue'
import AdminIndex from '../views/admin/Index.vue'
import MessageAdmin from '../views/admin/MessageAdmin.vue'
import ProjectAdmin from '../views/admin/ProjectAdmin.vue'
import SkillAdmin from '../views/admin/SkillAdmin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project', component: Project },
  { path: '/blog', component: Blog },
  { path: '/login', component: Login }, 
  { path: '/message', component: Message },

  // 后台
  {
    path: '/admin',
    component: AdminIndex,
    children: [
      { path: 'project', component: ProjectAdmin },
      { path: 'blog', component: BlogAdmin },
      { path: 'skill', component: SkillAdmin },
      { path: 'message', component: MessageAdmin }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫：未登录不能进后台
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.path.startsWith('/admin') && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router