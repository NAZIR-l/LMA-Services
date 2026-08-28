<template>
  <header class="site-header" :class="{ scrolled: isScrolled }">
    <div class="header-inner">

      <!-- Logo -->
      <router-link to="/" class="brand-link" @click="closeMenu">
        <img
          src="../assets/logo-preview.png"
          alt="LMA Services B.V."
          class="site-logo"
        />
      </router-link>

      <!-- Desktop nav -->
      <nav class="desktop-nav" aria-label="Hoofd navigatie">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :exact="link.to === '/'"
        >{{ link.label }}</router-link>
        <router-link to="/offerte-aanvragen" class="nav-link nav-cta">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Offerte aanvragen
        </router-link>
      </nav>

      <!-- Hamburger -->
      <button
        class="hamburger"
        :class="{ active: mobileOpen }"
        @click="toggleMenu"
        :aria-expanded="String(mobileOpen)"
        aria-label="Menu"
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <!-- Teleport backdrop + drawer outside header to avoid stacking issues -->
  <teleport to="body">
    <!-- Backdrop -->
    <div
      class="mob-backdrop"
      :class="{ visible: mobileOpen }"
      @click="closeMenu"
      aria-hidden="true"
    ></div>

    <!-- Drawer -->
    <nav
      class="mob-drawer"
      :class="{ open: mobileOpen }"
      aria-label="Mobiel menu"
      :aria-hidden="String(!mobileOpen)"
    >
      <!-- Drawer top bar -->
      <div class="mob-drawer-top">
        <img
          src="https://s3.us-east-1.amazonaws.com/arxgroup.sites/logo-lma.jpeg"
          alt="LMA Services"
          class="mob-logo"
        />
        <button class="mob-close" @click="closeMenu" aria-label="Sluit menu" type="button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <!-- Links -->
      <div class="mob-links">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="mob-link"
          @click="closeMenu"
        >
          <svg class="mob-link-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          {{ link.label }}
        </router-link>
      </div>

      <!-- CTA -->
      <div class="mob-footer">
        <router-link to="/offerte-aanvragen" class="mob-cta" @click="closeMenu">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          Offerte aanvragen
        </router-link>
      </div>
    </nav>
  </teleport>
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
  { to: '/vacatures',  label: 'Vacatures' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
]

const toggleMenu = () => { mobileOpen.value = !mobileOpen.value }
const closeMenu  = () => { mobileOpen.value = false }

const onScroll = () => { isScrolled.value = window.scrollY > 20 }
const onResize = () => { if (window.innerWidth > 960) closeMenu() }
const onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }

watch(mobileOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize)
  window.addEventListener('keydown', onKeydown)
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ── Header bar ─────────────────────────────────────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 900;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(31, 164, 191, 0.08);
  transition: box-shadow 0.3s ease;
}
.site-header.scrolled {
  box-shadow: 0 4px 20px rgba(14, 127, 153, 0.12);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── Logo ───────────────────────────────────────────────── */
.brand-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}
.site-logo {
  height: 80px;
  width: auto;
  object-fit: contain;
}

/* ── Desktop nav ────────────────────────────────────────── */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.2rem;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.55rem 0.85rem;
  border-radius: 10px;
  color: var(--dark-text);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
}
.nav-link:hover { color: var(--primary-teal); background: var(--light-teal); }
.nav-link.router-link-exact-active,
.nav-link.router-link-active {
  color: var(--primary-teal);
  background: rgba(31, 164, 191, 0.1);
  border-bottom: 3px solid var(--primary-teal);
  padding-bottom: calc(0.55rem - 3px);
}

.nav-cta {
  background: var(--primary-teal) !important;
  color: #fff !important;
  margin-left: 0.5rem;
  padding: 0.65rem 1.15rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(31,164,191,0.28);
}
.nav-cta:hover { background: var(--dark-teal) !important; }
.nav-cta.router-link-exact-active,
.nav-cta.router-link-active {
  background: var(--dark-teal) !important;
  color: #fff !important;
  border-bottom: none !important;
  padding-bottom: 0.65rem !important;
}

/* ── Hamburger ──────────────────────────────────────────── */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 22px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
}
.hamburger span {
  display: block;
  width: 100%;
  height: 2.5px;
  background: var(--dark-text);
  border-radius: 4px;
  transition: transform 0.28s ease, opacity 0.2s ease;
  transform-origin: center;
}
.hamburger.active span:nth-child(1) { transform: translateY(9.75px) rotate(45deg); }
.hamburger.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.active span:nth-child(3) { transform: translateY(-9.75px) rotate(-45deg); }

/* ── Backdrop (teleported) ──────────────────────────────── */
.mob-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 20, 40, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.mob-backdrop.visible {
  opacity: 1;
  pointer-events: auto;
}

/* ── Drawer (teleported) ────────────────────────────────── */
.mob-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(300px, 85vw);
  background: #ffffff;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: -6px 0 32px rgba(10, 20, 40, 0.18);
  transform: translateX(100%);
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}
.mob-drawer.open {
  transform: translateX(0);
}

.mob-drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 1.25rem;
  border-bottom: 1px solid rgba(31, 164, 191, 0.1);
  flex-shrink: 0;
}
.mob-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
}
.mob-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid rgba(31, 164, 191, 0.18);
  background: rgba(31, 164, 191, 0.06);
  color: var(--dark-text);
  cursor: pointer;
  transition: background 0.2s;
}
.mob-close:hover { background: rgba(31, 164, 191, 0.14); }

.mob-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  gap: 0.25rem;
}
.mob-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  color: var(--dark-text);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}
.mob-link:hover { background: rgba(31, 164, 191, 0.08); color: var(--primary-teal); }
.mob-link.router-link-exact-active,
.mob-link.router-link-active {
  background: rgba(31, 164, 191, 0.1);
  color: var(--primary-teal);
  border-left: 3px solid var(--primary-teal);
  padding-left: calc(1rem - 3px);
}
.mob-link-arrow { color: var(--primary-teal); opacity: 0.5; flex-shrink: 0; }

.mob-footer {
  padding: 1rem 1.25rem 1.5rem;
  border-top: 1px solid rgba(31, 164, 191, 0.1);
  flex-shrink: 0;
}
.mob-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.95rem 1.25rem;
  background: var(--primary-teal);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 14px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(31, 164, 191, 0.3);
  transition: background 0.2s, transform 0.2s;
}
.mob-cta:hover { background: var(--dark-teal); transform: translateY(-1px); }

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 960px) {
  .desktop-nav { display: none; }
  .hamburger   { display: flex; }
  .header-inner { height: 80px; padding: 0 1.25rem; }
  .site-logo { height: 66px; }
}

@media (max-width: 480px) {
  .header-inner { height: 70px; padding: 0 1rem; }
  .site-logo { height: 56px; }
}
</style>
