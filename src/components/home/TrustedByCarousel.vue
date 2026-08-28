<template>
  <section class="section section-gray trusted-section">
    <div class="container">
      <div class="section-header" data-aos="fade-up">
        <h2 class="section-title">Vertrouwd door</h2>
      </div>
    </div>

    <div class="logo-track-wrap" data-aos="fade-up" data-delay="200">
      <div class="logo-track">
        <!-- Set 1 -->
        <div class="logo-slide" v-for="logo in logos" :key="'a-' + logo.alt">
          <div class="logo-card">
            <img :src="logo.src" :alt="logo.alt" :class="{ invert: logo.invert }" />
          </div>
        </div>
        <!-- Set 2 — duplicate for seamless infinite loop -->
        <div class="logo-slide" v-for="logo in logos" :key="'b-' + logo.alt">
          <div class="logo-card">
            <img :src="logo.src" :alt="logo.alt" :class="{ invert: logo.invert }" />
          </div>
        </div>
      </div>
      <div class="fade-left"></div>
      <div class="fade-right"></div>
    </div>

    <div class="container">
      <p class="trusted-closing text-center" data-aos="fade-up" data-delay="400">
        Daarnaast werken wij samen met tal van andere opdrachtgevers door heel Nederland.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import imgBreedweer    from '../../assets/vertrouwd-door/Breedweer-logo-oud.png'
import imgCosta        from '../../assets/vertrouwd-door/Costa-Coffee-Emblem.png'
import imgLichttoren   from '../../assets/vertrouwd-door/delichttoren.png'
import imgInterfilling from '../../assets/vertrouwd-door/Interfilling-logo-3.png'
import imgMarkant      from '../../assets/vertrouwd-door/Logo-markant-theater-maashorst-cmyk.jpg'
import imgHector       from '../../assets/vertrouwd-door/hector_wit.svg'
import imgGorinchem    from '../../assets/vertrouwd-door/logo_gorinchem-a15.png'
import footer          from '../../assets/vertrouwd-door/footer-logo.png'


const logos = [
  { src: imgBreedweer,    alt: 'Breedweer',                    invert: false },
  { src: imgCosta,        alt: 'Costa Coffee',                 invert: false },
  { src: imgLichttoren,   alt: 'De Lichttoren',                invert: false },
  { src: imgInterfilling, alt: 'Interfilling',                 invert: false },
  { src: imgMarkant,      alt: 'Markant Theater Maashorst',    invert: false },
  { src: imgHector,       alt: 'Hotel Hector',                 invert: true  },
  { src: imgGorinchem,    alt: 'Van der Valk Hotel Gorinchem', invert: false },
  { src: footer,    alt: 'footer', invert: false },

]
</script>

<style scoped>
.trusted-section { overflow: hidden; }

.logo-track-wrap {
  position: relative;
  margin: 0 0 2.5rem;
  padding: 0.75rem 0;
  overflow: hidden;
}

.logo-track {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: max-content;
  animation: scrollLogos 32s linear infinite;
}

.logo-track:hover { animation-play-state: paused; }

@keyframes scrollLogos {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.logo-slide { flex-shrink: 0; }

.logo-card {
  width: 190px;
  height: 96px;
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1px solid rgba(23, 69, 107, 0.07);
  box-shadow: var(--shadow-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 1.5rem;
  transition: all 0.35s ease;
  overflow: hidden;
}

.logo-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(17, 137, 202, 0.2);
}

.logo-card img {
  max-width: 130px;
  max-height: 54px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  /* grayscale + dim by default */
  /* filter: grayscale(1) opacity(0.5); */
  transition: filter 0.35s ease;
}

/* hector_wit.svg is a white logo — invert makes it visible on white card */
.logo-card img.invert {
  filter: grayscale(1) invert(1) opacity(0.5);
  background: transparent;
}

.logo-card:hover img {
  filter: grayscale(0) opacity(1);
}

.logo-card:hover img.invert {
  filter: grayscale(0) invert(1) opacity(1);
}

/* Edge fades */
.fade-left,
.fade-right {
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  pointer-events: none;
  z-index: 2;
}
.fade-left  { left:  0; background: linear-gradient(to right, var(--light-bg) 10%, transparent); }
.fade-right { right: 0; background: linear-gradient(to left,  var(--light-bg) 10%, transparent); }

.trusted-closing {
  color: var(--text-light);
  font-size: 0.95rem;
}
</style>
