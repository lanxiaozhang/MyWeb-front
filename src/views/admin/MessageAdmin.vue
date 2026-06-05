<template>
  <div>
    <h2>留言管理</h2>
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>内容</th>
          <th>时间</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.content }}</td>
          <td>{{ item.createTime }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getMessageList } from '../../api';
const list = ref([])
onMounted(() => getMessageList().then(res => list.value = res.data))
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>