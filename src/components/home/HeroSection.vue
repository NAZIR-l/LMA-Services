<template>
  <section class="home-hero">
    <div class="hero-inner container">
      <div class="hero-left">
        <img class="hero-logo" :src="logo" alt="LMA Services" />
        <h1>Uw Specialist in Professionele Schoonmaakdiensten</h1>
        <p>Vakkundige teams, flexibele service en duurzame reinigingsoplossingen voor bedrijven.</p>
        <div class="hero-actions">
          <router-link to="/offerte-aanvragen" class="btn btn-primary">Offerte aanvragen</router-link>
          <router-link to="/diensten" class="btn btn-outline">Onze diensten</router-link>
        </div>
      </div>

      <div class="hero-right">
        <div class="hero-media">
          <img class="hero-image" :src="heroImg" alt="Schoonmaak team" />
          <div class="hero-overlay">
            <div class="stat">
              <div class="num">+500</div>
              <div class="label">Tevreden klanten</div>
            </div>
            <div class="stat">
              <div class="num">12</div>
              <div class="label">Jaar ervaring</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImg from '../../assets/lma-hero.png'
import logo from '../../assets/logo-lma.jpeg'
</script>

<style scoped>
.home-hero { padding:5rem 0; }
.hero-inner { display:grid; grid-template-columns: 1fr 520px; gap:2rem; align-items:center; }
.hero-logo { width:140px; display:block; margin-bottom:1.25rem; }
.hero-left h1 { margin:0 0 0.75rem; font-size:clamp(1.9rem,3.6vw,3.2rem); line-height:1.05; }
.hero-left p { margin:0 0 1.25rem; color:var(--text-light); max-width:56ch; }
.hero-actions { display:flex; gap:0.75rem; }
.hero-media { position:relative; border-radius:14px; overflow:hidden; }
.hero-image { width:100%; height:420px; object-fit:cover; display:block; }
.hero-overlay { position:absolute; bottom:12px; left:12px; display:flex; gap:0.75rem; }
.stat { background:rgba(255,255,255,0.95); padding:0.6rem 0.9rem; border-radius:10px; text-align:center; box-shadow:0 8px 20px rgba(16,24,40,0.06); }
.num { font-weight:800; color:var(--dark-teal); }
.label { font-size:0.85rem; color:var(--text-light); }

@media (max-width:1024px){ .hero-inner { grid-template-columns: 1fr; } .hero-right { order: -1; }
  .hero-image { height:300px; } }
@media (max-width:520px){ .hero-image { height:220px; } }
</style>