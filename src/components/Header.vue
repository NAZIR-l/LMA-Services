<template>
  <header class="site-header">
    <div class="header-inner container">
      <router-link to="/" class="brand-link" @click="closeMenu">
        <img src="/src/assets/logo-lma.jpeg" alt="LMA Services B.V." class="site-logo" />
      </router-link>

      <button class="mobile-toggle" :class="{ open: mobileOpen }" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-label="Open navigatie">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div v-if="mobileOpen" class="nav-overlay" @click="closeMenu" aria-hidden="true"></div>

      <nav class="site-nav" :class="{ open: mobileOpen }" role="navigation">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/projecten" class="nav-link" @click="closeMenu">Projecten</router-link>
        <router-link to="/diensten" class="nav-link" @click="closeMenu">Diensten</router-link>
        <router-link to="/over-ons" class="nav-link" @click="closeMenu">Over ons</router-link>
        <router-link to="/werken-bij" class="nav-link" @click="closeMenu">Werken bij</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
        <router-link to="/faq" class="nav-link" @click="closeMenu">FAQ</router-link>
              <router-link to="/offerte-aanvragen" class="nav-link nav-cta" @click="closeMenu">Offerte aanvragen</router-link>

      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'

const mobileOpen = ref(false)
const closeMenu = () => {
  mobileOpen.value = false
}

// lock body scroll when menu open
watch(mobileOpen, (val) => {
  try {
    document.body.style.overflow = val ? 'hidden' : ''
  } catch (e) {}
})

// close menu on resize to larger screens
const onResize = () => {
  if (window.innerWidth > 960 && mobileOpen.value) mobileOpen.value = false
}
window.addEventListener('resize', onResize)
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(12px);
  background: rgba(255,255,255,0.98);
  border-bottom: 1px solid rgba(31,164,191,0.08);
  box-shadow: 0 2px 12px rgba(16,24,40,0.04);
}

.header-inner {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 1rem;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.site-logo {
  height: 44px;
  width: auto;
  object-fit: contain;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.nav-link {
  color: var(--dark-text);
  text-decoration: none;
  font-weight: 600;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  transition: background 0.25s ease, color 0.25s ease;
  font-size: 0.95rem;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--primary-teal);
  background: var(--light-teal);
}

.nav-cta {
  background: var(--primary-teal);
  color: var(--white);
  border: 1px solid transparent;
  margin-left: 0.5rem;
}

.nav-cta:hover {
  background: var(--dark-teal);
  color: var(--white);
}

.mobile-toggle {
  display: none;
  border: none;
  background: transparent;
  padding: 0.5rem;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
}

.mobile-toggle span {
  display: block;
  width: 26px;
  height: 3px;
  background: var(--dark-text);
  border-radius: 999px;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.mobile-toggle.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.mobile-toggle.open span:nth-child(2) {
  opacity: 0;
}
.mobile-toggle.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-overlay {
  position: fixed;
  inset: 0 0 0 0;
  background: rgba(0,0,0,0.35);
  z-index: 900;
}

@media (max-width: 960px) {
  .mobile-toggle {
    display: flex;
  }

  .site-nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    flex-direction: column;
    align-items: stretch;
    padding: 0.75rem 1.25rem 1.25rem;
    gap: 0.5rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.28s cubic-bezier(.2,.8,.2,1), transform 0.28s ease;
    transform-origin: top center;
    border-bottom: 1px solid rgba(31, 164, 191, 0.08);
    box-shadow: 0 8px 30px rgba(16,24,40,0.06);
  }

  .site-nav.open {
    max-height: 520px;
    transform: translateY(0);
  }

  .nav-link {
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 14px;
  }

  .nav-cta {
    margin-left: 0;
  }
}
</style>

