</template>

<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import ApproachSection from '../components/home/ApproachSection.vue'
import UspsSection from '../components/home/UspsSection.vue'
import CtaSection from '../components/home/CtaSection.vue'
</script>
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="hero-eyebrow">Professionele schoonmaakcontracten</span>
          <h1>Uw Specialist in Professionele Schoonmaakdiensten</h1>
          <p>
            LMA Services B.V. uw betrouwbare schoonmaakpartner in heel Nederland. Wij leveren full-service schoonmaak voor kantoor, horeca, events en projectmatige reiniging.
          </p>
          <div class="hero-actions">
            <router-link to="/offerte-aanvragen" class="btn btn-primary btn-lg">Vraag vrijblijvend een offerte aan</router-link>
            <router-link to="/diensten" class="btn btn-secondary-white btn-lg">Bekijk onze diensten</router-link>
          </div>
          <div class="hero-highlights">
            <div>
              <strong>24/7</strong>
              <span>Bereikbaarheid</span>
            </div>
            <div>
              <strong>10+</strong>
              <span>Jaar ervaring</span>
            </div>
            <div>
              <strong>Heel Nederland</strong>
              <span>Landelijke dekking</span>
            </div>
          </div>
        </div>

        <!-- <div class="hero-visual">
          <div class="hero-card">
            <h2>Strakke planning, professionele uitvoering</h2>
            <p>
              Van dagelijkse kantoorreiniging tot intensieve event- en gevelreiniging: wij werken snel, discreet en met oog voor kwaliteit.
            </p>
            <ul>
              <li>Op maat gemaakte schoonmaakplannen</li>
              <li>Gecertificeerde teams</li>
              <li>Snelle inzetbaarheid</li>
            </ul>
          </div>
        </div> -->
      </div>
    </section>

    <section class="home-services section section-light">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Onze diensten</p>
          <h2>Complete schoonmaakoplossingen voor uw bedrijf</h2>
          <p>Wij verzorgen uw schoonmaakplan met een heldere structuur en professionele uitvoering.</p>
        <div class="page-home">
          <HeroSection />
          <ServicesSection />
          <ApproachSection />
          <UspsSection />
          <CtaSection />
        </div>

.hero-highlights {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}

.hero-highlights div {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  padding: 1.25rem 1.5rem;
  text-align: center;
}

.hero-highlights strong {
  display: block;
  font-size: 1.3rem;
  margin-bottom: 0.35rem;
}

.hero-card {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 30px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.1);
}

.hero-card h2 {
  margin: 0 0 1rem;
  font-size: 1.8rem;
}

.hero-card p {
  margin: 0 0 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.75;
}

.hero-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.hero-card ul li {
  margin-bottom: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  padding-left: 1.5rem;
  position: relative;
}

.hero-card ul li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--light-teal);
  font-size: 1.3rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-label {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--primary-teal);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.85rem;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.section-header p {
  margin: 1rem auto 0;
  max-width: 50rem;
  color: var(--dark-text);
}

.home-services,
.home-approach,
.home-usps {
  padding: 5rem 0;
}

.services-grid,
.method-steps,
.usp-grid {
  display: grid;
  gap: 1.5rem;
}

.services-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.service-card,
.step-card,
.usp-card {
  padding: 2rem;
  border-radius: 24px;
  background: white;
  border: 1px solid rgba(31, 164, 191, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover,
.step-card:hover,
.usp-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 48px rgba(31, 164, 191, 0.12);
}

.service-icon,
.usp-icon {
  display: inline-flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: var(--light-teal);
  color: var(--dark-teal);
  font-size: 1.8rem;
  margin-bottom: 1.25rem;
}

.service-card h3,
.step-card h3,
.usp-card h3 {
  margin: 0 0 0.85rem;
}

.service-card p,
.step-card p,
.usp-card p {
  margin: 0;
  color: var(--text-light);
  line-height: 1.75;
}

.method-steps {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.step-card {
  text-align: left;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--primary-teal);
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
}

.home-cta {
  padding: 4rem 0;
}

.cta-banner {
  display: grid;
  grid-template-columns: 1.1fr auto;
  gap: 2rem;
  align-items: center;
}

.cta-content h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.cta-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.7;
}

.btn-white {
  background: white;
  color: var(--dark-teal);
}

.btn-white:hover {
  background: rgba(255, 255, 255, 0.95);
}

@media (max-width: 1024px) {
  .hero-grid,
  .cta-banner {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 860px) {
  .method-steps {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  .hero-copy h1 {
    font-size: 2.6rem;
  }

  .hero-card {
    padding: 2rem;
  }
}
</style>
