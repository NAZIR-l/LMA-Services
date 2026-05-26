<template>
  <div class="contact-info">
    <p class="eyebrow">Contactgegevens</p>
    <h2 class="section-title" style="font-size: 1.8rem;">Direct contact</h2>
    <div class="divider divider-left"></div>

    <div class="info-cards">
      <a v-for="item in infoItems" :key="item.label" :href="item.href || '#'" class="info-card neu-card" :class="{ 'no-link': !item.href }">
        <div class="icon-box">
          <span v-html="item.icon"></span>
        </div>
        <div class="info-text">
          <strong>{{ item.label }}</strong>
          <span v-html="item.value"></span>
        </div>
      </a>
    </div>

    <div class="hours-card neu-card">
      <div class="hours-header">
        <div class="icon-box icon-box-teal">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <strong>Openingstijden</strong>
      </div>
      <div class="hours-grid">
        <span>Maandag – Vrijdag</span><span>08:00 – 18:00</span>
        <span>Zaterdag – Zondag</span><span>Gesloten</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const infoItems = [
  {
    label: 'Telefoonnummer',
    value: '+31 628 589 077',
    href: 'tel:+31628589077',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 17z"/></svg>`
  },
  {
    label: 'E-mailadres',
    value: 'info@lmaschoonmaken.nl',
    href: 'mailto:info@lmaschoonmaken.nl',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  },
  {
    label: 'Bezoekadres',
    value: 'Costerweg 1<br/>5466AM Veghel',
    href: null,
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  }
]
</script>

<style scoped>
.contact-info { display: flex; flex-direction: column; gap: 1.25rem; }

.info-cards { display: grid; gap: 0.85rem; }

.info-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem 1.4rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}
.info-card.no-link { cursor: default; }
.info-card:not(.no-link):hover { transform: translateY(-3px); }

.info-text { display: flex; flex-direction: column; gap: 0.25rem; }
.info-text strong { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); }
.info-text span { font-size: 0.95rem; color: var(--dark-text); font-weight: 600; line-height: 1.5; }

/* Hours */
.hours-card { padding: 1.4rem; display: flex; flex-direction: column; gap: 1rem; }
.hours-header { display: flex; align-items: center; gap: 0.85rem; }
.hours-header strong { font-weight: 700; color: var(--dark-text); }

.hours-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem 1.5rem;
}
.hours-grid span { font-size: 0.9rem; color: var(--text-light); }
.hours-grid span:nth-child(even) { font-weight: 700; color: var(--dark-text); text-align: right; }
</style>
