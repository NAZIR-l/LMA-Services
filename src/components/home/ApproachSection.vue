<template>
  <section class="home-approach">
    <div class="container">
      <div class="section-header">
        <h2>Onze werkwijze</h2>
        <p>Eenvoudige stappen om snel en betrouwbaar met ons te werken.</p>
      </div>

      <div class="method-steps">
        <article class="step-card" v-for="(step, idx) in steps" :key="idx">
          <div class="step-top">
            <div class="step-number">{{ idx + 1 }}</div>
            <h3>{{ step.title }}</h3>
          </div>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { title: 'Analyse van uw ruimte', text: 'We brengen uw specifieke schoonmaakbehoeften en prioriteiten in kaart.' },
  { title: 'Plan op maat', text: 'Wij stellen een flexibel schema op, afgestemd op uw activiteiten en openingstijden.' },
  { title: 'Professionele uitvoering', text: 'Gecertificeerde teams werken snel en discreet met duurzame middelen.' },
  { title: 'Nazorg & communicatie', text: 'Regelmatige controles en directe communicatie bij feedback of wijzigingen.' }
]
</script>

<style scoped>
.home-approach { padding: 5rem 0; }
.method-steps { display:grid; gap:1.25rem; grid-template-columns: repeat(4, 1fr); }
.step-card { background: linear-gradient(180deg,#fff,#f8ffff); border-radius:14px; padding:1.25rem; box-shadow:0 12px 30px rgba(16,24,40,0.06); }
.step-top { display:flex; align-items:center; gap:1rem; margin-bottom:0.5rem; }
.step-number { width:48px; height:48px; border-radius:12px; background:var(--primary-teal); color:white; display:inline-flex; align-items:center; justify-content:center; font-weight:700; }
.step-card h3 { margin:0; font-size:1.05rem; color:var(--dark-text); }
.step-card p { margin:0; color:var(--text-light); line-height:1.6; }

@media (max-width:1024px){ .method-steps { grid-template-columns: repeat(2, 1fr); } }
@media (max-width:720px){ .method-steps { grid-template-columns: 1fr; } }
</style>
