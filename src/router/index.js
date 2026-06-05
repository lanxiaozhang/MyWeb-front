// 路由文件 100% 正确版
import { createRouter, createWebHistory } from 'vue-router'

// 前台
import Blog from '../views/Blog.vue'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'

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

// 必须写这个！！！
export default router