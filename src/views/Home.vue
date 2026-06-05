<template>
  <div class="home">
    <header class="hero">
      <h1>我的个人作品集</h1>
      <p>专注于前端 / 后端 / 全栈开发</p>
    </header>

    <section class="section">
      <h2>我的技能</h2>
      <div class="skill-list">
        <div class="skill" v-for="s in skillList" :key="s.id">
          <div class="name">{{ s.name }}</div>
          <div class="percent">{{ s.percentage }}%</div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>最新项目</h2>
      <div class="project-list">
        <div class="card" v-for="p in projectList" :key="p.id">
          <h3>{{ p.title }}</h3>
          <p>{{ p.content.substring(0, 50) }}...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getProjectList, getSkillList } from '../api'

const skillList = ref([])
const projectList = ref([])

onMounted(async () => {
  const resSkill = await getSkillList()
  skillList.value = resSkill.data

  const resProject = await getProjectList()
  projectList.value = resProject.data
})
</script>

<style scoped>
.home {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  padding: 60px 0;
}

.section {
  margin: 40px 0;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.skill {
  background: #f5f5f5;
  padding: 10px 16px;
  border-radius: 8px;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}
</style>