<template>
  <section class="projecten-section">
    <div class="filter-wrap">
      <button 
        v-for="cat in categories" 
        :key="cat" 
        @click="selectedCategory = cat" 
        :class="['filter-btn', { active: selectedCategory === cat }]"
      >
        {{ cat }}
      </button>
    </div>

    <div class="projects-grid">
        <article v-for="project in filteredProjects" :key="project.id" class="project-card">
          <div class="project-image-wrap">
            <img :src="showAfter.has(project.id) ? project.after : project.before" :alt="project.title" class="project-image" />
          </div>
          <div class="project-content">
            <p class="project-category">{{ project.category }} — {{ project.location }}</p>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>

            <div class="project-actions">
              <button class="btn btn-small" @click="toggleBeforeAfter(project.id)">
                {{ showAfter.has(project.id) ? 'Bekijk voor' : 'Bekijk na' }}</button>
              <router-link :to="`/projecten/${project.id}`" class="btn btn-small btn-outline">Bekijk project</router-link>
              <router-link to="/offerte-aanvragen" class="btn btn-small btn-primary">Offerte aanvragen</router-link>
            </div>
          </div>
        </article>
      </div>
  </section>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue'
import imgA from '../../assets/eilo-clean-house.png'
import imgB from '../../assets/eilo-floor.png'

const selectedCategory = ref('Alles')
const categories = ['Alles', 'Kantoor', 'Horeca', 'Evenementen', 'Industrie']

const projects = [
  {
    id: 1,
    title: 'Event hal dieptereiniging',
    category: 'Evenementen',
    location: 'Utrecht',
    description: 'Volledige dieptereiniging van een grote eventhal na een druk festival.',
    before: imgB,
    after: imgA
  },
  {
    id: 2,
    title: 'Kantooronderhoud voor modern bedrijf',
    category: 'Kantoor',
    location: 'Amsterdam',
    description: 'Wekelijks onderhoud van kantoorruimtes en gemeenschappelijke zones.',
    before: imgA,
    after: imgB
  },
  {
    id: 3,
    title: 'Gevelbewassing kantoortoren',
    category: 'Kantoor',
    location: 'Rotterdam',
    description: 'Technische reiniging van ramen en gevels met professionele apparatuur.',
    before: imgB,
    after: imgB
  },
  {
    id: 4,
    title: 'Horeca diepe reiniging',
    category: 'Horeca',
    location: 'Den Haag',
    description: 'Grondige desinfectie van keuken en eetruimte voor veilige gastbeleving.',
    before: imgA,
    after: imgB
  },
  {
    id: 5,
    title: 'Industrieel onderhoud',
    category: 'Industrie',
    location: 'Eindhoven',
    description: 'Regulier onderhoud van productiehallen en logistieke ruimtes.',
    before: imgB,
    after: imgA
  },
  {
    id: 6,
    title: 'Nareiniging na evenement',
    category: 'Evenementen',
    location: 'Tilburg',
    description: 'Complexe ruimte hersteld in recordtijd zonder kwaliteitsverlies.',
    before: imgA,
    after: imgB
  }
]

const showAfter = ref(new Set())

function toggleBeforeAfter(id) {
  if (showAfter.value.has(id)) showAfter.value.delete(id)
  else showAfter.value.add(id)
  // trigger reactivity
  showAfter.value = new Set(showAfter.value)
}

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Alles') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})
</script>

<style scoped>
.projecten-section { padding: 3rem 0; }

.filter-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 0.6rem 1.5rem;
  border-radius: 999px;
  border: 2px solid var(--primary-teal);
  background: transparent;
  color: var(--primary-teal);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--primary-teal);
  color: white;
}

.filter-btn:hover {
  background: var(--primary-teal);
  color: white;
}

.projects-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
}

.project-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(16, 24, 40, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(31, 164, 191, 0.12);
}

.project-image-wrap {
  overflow: hidden;
  height: 200px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  color: var(--primary-teal);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-card h3 {
  margin: 0 0 0.75rem;
  color: var(--dark-text);
}

.project-card p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 720px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
