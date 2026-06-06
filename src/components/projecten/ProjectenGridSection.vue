<template>
  <section class="projecten-section section">
    <div class="container">
      <!-- Filter -->
      <div class="filter-wrap" data-aos="fade-up">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="['filter-btn', { active: selectedCategory === cat }]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <transition-group name="project-fade" tag="div" class="projects-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card neu-card"
        >
          <div class="project-image-wrap">
            <img
              :src="showAfter.has(project.id) ? project.after : project.before"
              :alt="project.title"
              class="project-image"
            />
            <div class="project-image-overlay">
              <button class="before-after-btn" @click="toggleBeforeAfter(project.id)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                {{ showAfter.has(project.id) ? 'Bekijk voor' : 'Bekijk na' }}
              </button>
            </div>
            <span class="project-category-tag">{{ project.category }}</span>
          </div>

          <div class="project-body">
            <div class="project-meta">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ project.location }}
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <router-link to="/offerte-aanvragen" class="project-cta">
              Vergelijkbare opdracht aanvragen
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </article>
      </transition-group>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Local assets from src/assets/services/
import img1 from '../../assets/services/1.png'
import img2 from '../../assets/services/2.png'
import img3 from '../../assets/services/3.png'
import img4 from '../../assets/services/4.png'
import img5 from '../../assets/services/5.png'
import img6 from '../../assets/services/6.png'

const selectedCategory = ref('Alles')
const categories = ['Alles', 'Kantoor', 'Horeca', 'Evenementen', 'Industrie']

const projects = [
  {
    id: 1, title: 'Event hal dieptereiniging', category: 'Evenementen', location: 'Utrecht',
    description: 'Volledige dieptereiniging van een grote eventhal na een druk meerdaags festival.',
    before: img1, after: img1
  },
  {
    id: 2, title: 'Kantooronderhoud — modern bedrijf', category: 'Kantoor', location: 'Amsterdam',
    description: 'Wekelijks onderhoud van kantoorruimtes en gemeenschappelijke zones voor +200 medewerkers.',
    before: img2, after: img2
  },
  {
    id: 3, title: 'Gevelbewassing kantoortoren', category: 'Kantoor', location: 'Rotterdam',
    description: 'Technische reiniging van ramen en gevels met professionele apparatuur op hoogte.',
    before: img3, after: img3
  },
  {
    id: 4, title: 'Horeca diepe reiniging', category: 'Horeca', location: 'Den Haag',
    description: 'Grondige desinfectie van keuken en eetruimte voor een veilige gastbeleving.',
    before: img4, after: img4
  },
  {
    id: 5, title: 'Industrieel onderhoud', category: 'Industrie', location: 'Eindhoven',
    description: 'Regulier onderhoud van productiehallen en logistieke ruimtes bij een groot productiebedrijf.',
    before: img5, after: img5
  },
  {
    id: 6, title: 'Nareiniging na groot evenement', category: 'Evenementen', location: 'Tilburg',
    description: 'Complexe ruimte van 2.000m² hersteld in recordtijd na een bedrijfsevenement.',
    before: img6, after: img6
  }
]

const showAfter = ref(new Set<number>())

function toggleBeforeAfter(id: number) {
  const s = new Set(showAfter.value)
  s.has(id) ? s.delete(id) : s.add(id)
  showAfter.value = s
}

const filteredProjects = computed(() =>
  selectedCategory.value === 'Alles'
    ? projects
    : projects.filter(p => p.category === selectedCategory.value)
)
</script>

<style scoped>
.projecten-section { background: var(--neu-bg); }

/* Filter */
.filter-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  border: 2px solid var(--primary-teal);
  background: transparent;
  color: var(--primary-teal);
  font-weight: 700;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
}
.filter-btn:hover,
.filter-btn.active {
  background: var(--primary-teal);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(31,164,191,0.3);
}

/* Grid */
.projects-grid {
  display: grid;
  gap: 1.75rem;
  grid-template-columns: repeat(3, 1fr);
}

.project-card { padding: 0; overflow: hidden; cursor: default; }

.project-image-wrap {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}
.project-card:hover .project-image { transform: scale(1.06); }

.project-image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.project-card:hover .project-image-overlay { opacity: 1; }

.before-after-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.9);
  color: var(--dark-teal);
  font-weight: 700;
  font-size: 0.82rem;
  cursor: pointer;
  border: none;
  font-family: inherit;
  transition: background 0.2s ease;
}
.before-after-btn:hover { background: white; }

.project-category-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--primary-teal);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.project-body { padding: 1.5rem; }

.project-meta {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.82rem;
  color: var(--primary-teal);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.project-card h3 { font-size: 1rem; font-weight: 700; color: var(--dark-text); margin-bottom: 0.5rem; }
.project-body > p { font-size: 0.88rem; color: var(--text-light); line-height: 1.65; margin-bottom: 1rem; }

.project-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--primary-teal);
  text-decoration: none;
  transition: gap 0.2s ease;
}
.project-cta:hover { gap: 0.55rem; }

/* Transition for filter */
.project-fade-move,
.project-fade-enter-active,
.project-fade-leave-active { transition: all 0.4s ease; }
.project-fade-enter-from, .project-fade-leave-to { opacity: 0; transform: scale(0.95); }
.project-fade-leave-active { position: absolute; }

@media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .projects-grid { grid-template-columns: 1fr; } }
</style>
