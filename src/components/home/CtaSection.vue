<template>
  <section class="home-cta">
    <div class="cta-bg" :style="{ backgroundImage: `linear-gradient(rgba(31,164,191,0.9), rgba(14,127,153,0.9)), url(${ctaImg})` }">
      <div class="container cta-banner">
        <div class="cta-content">
          <h2>Klaar voor een schone werkomgeving?</h2>
          <p>Neem contact op voor een offerte op maat en een snelle planning.</p>
        </div>
        <router-link to="/offerte-aanvragen" class="btn btn-cta">Offerte aanvragen</router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ctaImg from '../../assets/eilo-clean-house.png'
</script>

<style scoped>
.home-cta { margin-top:2.5rem; }
.cta-bg { background-size:cover; background-position:center; border-radius:12px; padding:3rem 0; color:white; }
.cta-banner { display:grid; grid-template-columns: 1fr auto; gap:1.5rem; align-items:center; }
.cta-content h2 { margin:0 0 0.5rem; font-size:clamp(1.8rem,3vw,2.6rem); color:white; }
.cta-content p { margin:0; color: rgba(255,255,255,0.95); line-height:1.6; }
.btn-cta { background: white; color: var(--dark-teal); padding:0.95rem 1.6rem; border-radius:999px; font-weight:800; }

@media (max-width:1024px){ .cta-banner { grid-template-columns:1fr; text-align:center; } }
</style>
