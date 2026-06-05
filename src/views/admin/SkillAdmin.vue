<template>
  <div>
    <h2>技能管理</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>技能</th>
          <th>熟练度</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.percentage }}%</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getSkillList } from '../../api';
const list = ref([])
onMounted(() => getSkillList().then(res => list.value = res.data))
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