<template>
  <section class="cta-section">
    <div class="container cta-content">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
      <router-link :to="buttonLink" class="btn btn-primary btn-lg">{{ buttonText }}</router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Geïnteresseerd?'
  },
  subtitle: {
    type: String,
    default: 'Neem vandaag contact op voor meer informatie.'
  },
  buttonText: {
    type: String,
    default: 'Offerte aanvragen'
  },
  buttonLink: {
    type: String,
    default: '/offerte-aanvragen'
  }
})
</script>

<style scoped>
.cta-section {
  background: linear-gradient(135deg, rgba(31, 164, 191, 0.95) 0%, rgba(14, 127, 153, 0.95) 100%);
  padding: 4rem 0;
  color: white;
  text-align: center;
}

.cta-content h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
}

.cta-content p {
  margin: 0 0 2rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.92);
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.2rem;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid transparent;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
  cursor: pointer;
}

.btn-primary {
  background: white;
  color: var(--primary-teal);
  border-color: white;
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateY(-2px);
}

@media (max-width: 720px) {
  .cta-section { padding: 3rem 0; }
  .cta-content p { font-size: 1rem; }
}
</style>
