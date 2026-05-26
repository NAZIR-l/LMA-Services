<template>
  <div class="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()

function observeAosElements() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )
  document.querySelectorAll('[data-aos]').forEach((el) => observer.observe(el))
}

onMounted(() => {
  setTimeout(observeAosElements, 50)
})

watch(
  () => route.path,
  () => setTimeout(observeAosElements, 100)
)
</script>

<style>
html, body { margin: 0; padding: 0; }

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content { flex: 1; }
</style>
