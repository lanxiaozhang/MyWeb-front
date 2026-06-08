import { createRouter, createWebHistory } from 'vue-router'

// 前台
import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Message from '../views/Message.vue'
import Project from '../views/Project.vue'
import UserSetting from '../views/UserSetting.vue'

// 后台
import BlogAdmin from '../views/admin/BlogAdmin.vue'
import AdminIndex from '../views/admin/Index.vue'
import MessageAdmin from '../views/admin/MessageAdmin.vue'
import ProjectAdmin from '../views/admin/ProjectAdmin.vue'
import SkillAdmin from '../views/admin/SkillAdmin.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/project', component: Project },
  { path: '/blog', component: Blog },
  { path: '/message', component: Message },
  { path: '/login', component: Login },
  { path: '/user-setting', component: UserSetting },

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

// 鉴权守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if ((to.path.startsWith('/admin') || to.path === '/user-setting') && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router