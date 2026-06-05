<template>
  <div>
    <h2>博客管理</h2>
    <button @click="add">新增</button>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>标题</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>
            <button @click="edit(item)">编辑</button>
            <button @click="deleteItem(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="showForm" class="form">
      <input v-model="form.title" placeholder="标题" />
      <textarea v-model="form.content" placeholder="内容"></textarea>
      <button @click="save">保存</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { addBlog, delBlog, getBlogList, updateBlog } from '../../api'

const list = ref([])
const form = ref({ title: '', content: '' })
const showForm = ref(false)
const isEdit = ref(false)

onMounted(() => getList())

function getList() {
  getBlogList().then(res => list.value = res.data)
}

function add() {
  form.value = { title: '', content: '' }
  isEdit.value = false
  showForm.value = true
}

function edit(item) {
  form.value = { ...item }
  isEdit.value = true
  showForm.value = true
}

async function save() {
  isEdit.value ? await updateBlog(form.value) : await addBlog(form.value)
  showForm.value = false
  getList()
}

function deleteItem(id) {
  if (confirm('确定删除？')) delBlog(id).then(() => getList())
}
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

td,
th {
  border: 1px solid #ccc;
  padding: 8px;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}
</style>