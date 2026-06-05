import request from '../utils/request'

// 项目接口
export const getProjectList = () => request.get('/project/list')
export const addProject = (data) => request.post('/project/add', data)
export const updateProject = (data) => request.post('/project/update', data)
export const delProject = (id) => request.get(`/project/del/${id}`)

// 博客接口
export const getBlogList = () => request.get('/blog/list')
export const addBlog = (data) => request.post('/blog/add', data)
export const updateBlog = (data) => request.post('/blog/update', data)
export const delBlog = (id) => request.get(`/blog/del/${id}`)

// 技能
export const getSkillList = () => request.get('/skill/list')

// 留言
export const getMessageList = () => request.get('/message/list')
export const addMessage = (data) => request.post('/message/add', data)

// 分类
export const getCategoryList = () => request.get('/category/list')

// 管理员
export const getAdminList = () => request.get('/admin/list')

// 配置
export const getConfigList = () => request.get('/config/list')