<template>
  <header class="site-header" :class="{ scrolled: isScrolled, 'menu-open': mobileOpen }">
    <div class="header-inner container">
      <router-link to="/" class="brand-link" @click="closeMenu">
        <img src="https://s3.us-east-1.amazonaws.com/arxgroup.sites/logo-lma.jpeg" alt="LMA Services B.V." class="site-logo" />
      </router-link>

      <button
        class="mobile-toggle"
        :class="{ open: mobileOpen }"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Open navigatie"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div v-if="mobileOpen" class="nav-overlay" @click="closeMenu" aria-hidden="true"></div>

      <nav class="site-nav" :class="{ open: mobileOpen }" role="navigation">
        <router-link v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link" @click="closeMenu">
          {{ link.label }}
        </router-link>
        <router-link to="/offerte-aanvragen" class="nav-link nav-cta" @click="closeMenu">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Offerte aanvragen
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const mobileOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projecten', label: 'Projecten' },
  { to: '/diensten', label: 'Diensten' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/werken-bij', label: 'Werken bij' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
]

const closeMenu = () => { mobileOpen.value = false }

const onScroll = () => { isScrolled.value = window.scrollY > 20 }
const onResize = () => { if (window.innerWidth > 960 && mobileOpen.value) mobileOpen.value = false }

watch(mobileOpen, (val) => {
  try { document.body.style.overflow = val ? 'hidden' : '' } catch {}
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(31, 164, 191, 0.06);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.site-header.scrolled {
  box-shadow: 0 4px 24px rgba(14, 127, 153, 0.1);
  border-bottom-color: rgba(31, 164, 191, 0.12);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 0.5rem;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.site-logo {
  height: 46px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.brand-link:hover .site-logo { transform: scale(1.03); }

/* NAV */
.site-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--dark-text);
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.65rem 0.9rem;
  border-radius: 12px;
  transition: background 0.22s ease, color 0.22s ease;
  white-space: nowrap;
}

.nav-link:hover { color: var(--primary-teal); background: var(--light-teal); }

.nav-link.router-link-exact-active {
  color: var(--primary-teal);
    background: inherit;
    border-bottom: 3px solid rgb(29 152 178);
}

.nav-cta {
  background: var(--primary-teal);
  color: white !important;
  margin-left: 0.5rem;
  padding: 0.65rem 1.2rem;
  box-shadow: 0 4px 16px rgba(31, 164, 191, 0.35);
  transition: background 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
}
.nav-cta:hover {
  background: var(--dark-teal) !important;
  color: white !important;
  box-shadow: 0 8px 24px rgba(31, 164, 191, 0.45);
  transform: translateY(-1px);
}
.nav-cta.router-link-exact-active {
  background: var(--dark-teal);
  color: white !important;
}

/* Mobile toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  padding: 0;
  z-index: 1100;
}

.mobile-toggle span {
  display: block;
  width: 100%;
  height: 2.5px;
  background: var(--dark-text);
  border-radius: 999px;
  transition: transform 0.25s ease, opacity 0.2s ease, background 0.2s ease;
  transform-origin: center;
}

.mobile-toggle.open span:nth-child(1) { transform: translateY(8.75px) rotate(45deg); }
.mobile-toggle.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.mobile-toggle.open span:nth-child(3) { transform: translateY(-8.75px) rotate(-45deg); }

.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 26, 46, 0.45);
  z-index: 900;
  backdrop-filter: blur(2px);
  animation: fadeIn 0s ease;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

/* RESPONSIVE */
@media (max-width: 960px) {
  .mobile-toggle { display: flex; }

  .site-nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(320px, 85vw);
    background: white;
    flex-direction: column;
    align-items: stretch;
    padding: 88px 1.25rem 2rem;
    gap: 0.35rem;
    z-index: 1000;
    transform: translateX(110%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -8px 0 32px rgba(0,0,0,0.12);
    overflow-y: auto;
  }

  .site-nav.open { transform: translateX(0); }

  .nav-link {
    width: 100%;
    padding: 1rem 1.1rem;
    border-radius: 14px;
    font-size: 1rem;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 0.5rem;
    padding: 1rem 1.1rem;
    justify-content: center;
  }
}
</style>
