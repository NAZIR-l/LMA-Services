<template>
  <div class="page-vacatures">

    <!-- HERO -->
    <section class="page-hero vacatures-hero">
      <div class="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
          alt="Vacatures LMA Services"
          loading="eager"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
       
        <h1>Vind jouw<br/><span class="heading-accent">volgende baan</span></h1>
        <p>Bekijk onze actuele vacatures en solliciteer vandaag nog. Wij begeleiden je persoonlijk van aanmelding tot eerste werkdag.</p>
     
    
      </div>
    </section>

    <!-- VACATURE LIST -->
    <section id="vacatures" class="section section-neu">
      <div class="container">

        <div class="section-header" data-aos="fade-up">
          <p class="eyebrow">Openstaande functies</p>
          <h2 class="section-title">Actuele vacatures</h2>
          <p class="section-subtitle">{{ vacatures.length }} functies beschikbaar — solliciteer vandaag en start snel.</p>
        </div>

        <div class="vac-list">
          <article
            v-for="(v, i) in vacatures"
            :key="i"
            class="vac-card"
            data-aos="fade-up"
            :data-delay="String(i * 100)"
          >
            <!-- LEFT sidebar -->
            <div class="vac-sidebar">
              <div class="sb-icon" v-html="v.icon"></div>
              <div class="sb-tags">
                <span class="sb-tag sb-tag-sector">{{ v.sector }}</span>
                <span class="sb-tag sb-tag-type">{{ v.type }}</span>
                <span class="sb-tag sb-tag-urgent" v-if="v.urgent">Prioriteit</span>
              </div>
              <h2 class="sb-title">{{ v.titel }}</h2>
              <div class="sb-location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {{ v.locatie }}
              </div>
              <div class="sb-divider"></div>
              <div class="sb-highlights">
                <div class="sb-hl" v-for="h in v.highlights" :key="h.label">
                  <div class="sb-hl-icon" v-html="h.icon"></div>
                  <div>
                    <span class="sb-hl-label">{{ h.label }}</span>
                    <span class="sb-hl-val">{{ h.value }}</span>
                  </div>
                </div>
              </div>
              <div class="sb-salary" v-if="v.uurloon">
                <span class="sb-sal-label">Uurloon</span>
                <span class="sb-sal-amount">€ {{ v.uurloon }}</span>
                <span class="sb-sal-note">bruto per uur</span>
              </div>
              <div class="sb-salary sb-salary-open" v-else>
                <span class="sb-sal-label">Salaris</span>
                <span class="sb-sal-open-text">Nader te bepalen</span>
              </div>
            </div>

            <!-- RIGHT content -->
            <div class="vac-main">
              <div class="vm-header">
                <span class="vm-status" :class="v.direct ? 'vm-status--direct' : 'vm-status--open'">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <polyline v-if="v.direct" points="20 6 9 17 4 12"/>
                    <polyline v-else points="12 6 12 12 16 14"/>
                  </svg>
                  {{ v.direct ? 'Start per direct' : 'Open inschrijving' }}
                </span>
                <router-link to="/contact" class="btn btn-primary vm-cta">
                  Solliciteer nu
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </router-link>
              </div>

              <div class="vm-body">
                <div class="vm-col">
                  <span class="vm-label">Over de functie</span>
                  <p class="vm-intro">{{ v.intro }}</p>
                  <span class="vm-label" style="margin-top:1.5rem;">Wat wij bieden</span>
                  <ul class="vm-list vm-list--offer">
                    <li v-for="o in v.aanbod" :key="o">
                      <span class="vm-bullet"></span>{{ o }}
                    </li>
                  </ul>
                </div>
                <div class="vm-col">
                  <span class="vm-label">Wat wij vragen</span>
                  <ul class="vm-list vm-list--req">
                    <li v-for="r in v.eisen" :key="r">
                      <span class="vm-check">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      </span>
                      {{ r }}
                    </li>
                  </ul>
                </div>
              </div>

              <div class="vm-footer">
                <router-link to="/contact" class="vm-ask">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  Stel een vraag over deze vacature
                </router-link>
                <router-link to="/contact" class="btn btn-outline vm-cta-sm">Inschrijven</router-link>
              </div>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <CtaCallToAction
      title="Staat jouw functie er niet bij?"
      subtitle="Schrijf je open in — wij zoeken proactief een passende functie voor jou."
      buttonText="Neem contact op"
      buttonLink="/contact"
    />

  </div>
</template>

<script setup lang="ts">
import CtaCallToAction from '../components/shared/CtaCallToAction.vue'

const heroStats = [
  { value: '5',       label: 'Vacatures' },
  { value: '€ 14,06', label: 'Uurloon vanaf' },
  { value: 'Direct',  label: 'Start mogelijk' },
]

const vacatures = [
  {
    titel: 'Schoonmaakmedewerker',
    sector: 'Schoonmaak', type: 'Parttime', locatie: 'Maastricht',
    direct: true, urgent: true, uurloon: null,
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    intro: 'Voor een opdrachtgever in Maastricht zijn wij per direct op zoek naar een betrouwbare schoonmaakmedewerker. Je start vroeg in de ochtend en bent klaar voor het grootste deel van de dag nog begint. Een ideale functie voor iemand die van structuur houdt en graag vroeg op pad gaat.',
    highlights: [
      { label: 'Starttijd',  value: '07:00 uur',      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
      { label: 'Uren p/dag', value: '3 à 4 uur',      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
      { label: 'Dagen p/w',  value: 'Meerdere dagen', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>` },
    ],
    aanbod: ['Vroege diensten — je dag is snel vrij', 'Start per direct', 'Persoonlijke begeleiding via LMA', 'Prettige werkomgeving met duidelijke taken'],
    eisen:  ['Nederlands sprekend', 'Engels is een must', 'Ervaring in de schoonmaak gewenst', 'Betrouwbaar en punctueel'],
  },
  {
    titel: 'Schoonmaak Vakantiepark',
    sector: 'Schoonmaak', type: 'Parttime', locatie: 'Kerkdriel',
    direct: true, urgent: true, uurloon: null,
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    intro: 'Op een prachtig vakantiepark in Kerkdriel zoeken wij vanaf 19 september een enthousiaste collega die zorg draagt voor de vakantiehuisjes en gemeenschappelijke ruimtes. Jij zorgt ervoor dat elke gast aankomt in een fris en schoon verblijf. Maandag t/m vrijdag, vaste tijden en een fijne werkomgeving.',
    highlights: [
      { label: 'Startdatum', value: '19 september',   icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>` },
      { label: 'Werktijden', value: 'Ma t/m vr',      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
      { label: 'Uren p/dag', value: '4 – 7 uur',      icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
    ],
    aanbod: ['Vaste dagen maandag t/m vrijdag', 'Werken in een mooie vakantieomgeving', 'Zelfstandig én in teamverband', 'Startdatum 19 september'],
    eisen:  ['Nederlands sprekend', 'Engels is een must', 'Ervaring in hotel/vakantiehuisjes is een pré', 'Nauwkeurig en representatief werken'],
  },
  {
    titel: 'Keukenschoonmaak',
    sector: 'Schoonmaak', type: 'Parttime / Fulltime', locatie: 'Gorinchem',
    direct: true, urgent: false, uurloon: '14,06',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,
    intro: 'Ben jij iemand die van aanpakken houdt en trots is op een glanzend resultaat? In een professionele keukenomgeving in Gorinchem zoeken wij een collega die zorg draagt voor een hygiënische en representatieve werkplek. Je leidinggevende werkt je persoonlijk in — je staat er nooit alleen voor.',
    highlights: [
      { label: 'Werktijden', value: 'Ochtend, middag of avond', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
      { label: 'Dagen p/w',  value: 'Gemiddeld 5 dagen',       icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>` },
      { label: 'Uren p/w',   value: '7 – 30 uur',              icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
    ],
    aanbod: ['Persoonlijke inwerkbegeleiding', 'Flexibele inroostering naar keuze', 'Stabiel dienstverband via LMA', 'Weekendwerk beschikbaar'],
    eisen:  ['Flexibele instelling — ochtend, middag of avond', 'Beschikbaar in het weekend', 'Nederlands sprekend (Engels is een pré)', 'Ervaring is een pré, geen vereiste'],
  },
  {
    titel: 'Schoonmaakmedewerker B&B',
    sector: 'Schoonmaak', type: 'Parttime', locatie: 'Breda',
    direct: true, urgent: false, uurloon: '14,06',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    intro: 'Geniet jij ervan om gasten een onvergetelijke eerste indruk te geven? In een sfeervolle B&B in Breda zorg jij samen met collega\'s dat elk appartement tip-top in orde is voor de volgende gast. Vaste werktijden, een hecht team en een frisse omgeving — elke dag opnieuw.',
    highlights: [
      { label: 'Werktijden', value: '10:30 – 15:30',  icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
      { label: 'Dagen p/w',  value: '5 dagen',         icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>` },
      { label: 'Uren p/dag', value: 'Gemiddeld 5 uur', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
    ],
    aanbod: ['Vaste werktijden 10:30 – 15:30', 'Gezellig en hecht team', 'Afwisselende taken in mooie omgeving', 'Gastcontact mogelijk'],
    eisen:  ['Nederlands sprekend', 'Gasten kunnen verwelkomen of te woord staan', 'Sterk in teamwork', 'Nauwkeurig en representatief'],
  },
  {
    titel: 'Invalkracht Schoonmaak',
    sector: 'Schoonmaak', type: 'Oproepbasis', locatie: 'Regio — eigen auto gewenst',
    direct: false, urgent: false, uurloon: null,
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    intro: 'Ben jij flexibel, betrouwbaar en altijd beschikbaar als het nodig is? Wij zoeken gemotiveerde collega\'s voor invalbasis in de schoonmaak. Met een eigen auto ben je snel overal inzetbaar — jouw inzet wordt altijd gewaardeerd en eerlijk beloond.',
    highlights: [
      { label: 'Dienstverband', value: 'Oproep / invalbasis', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>` },
      { label: 'Mobiliteit',   value: 'Eigen auto gewenst',  icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>` },
      { label: 'Werkregio',    value: 'Flexibel inzetbaar',  icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>` },
    ],
    aanbod: ['Flexibel werken op jouw gewenste momenten', 'Breed locatienetwerk in de regio', 'Persoonlijk contact met LMA', 'Doorgroei naar vaste uren mogelijk'],
    eisen:  ['Aantoonbare ervaring in de schoonmaak', 'Nederlands sprekend', 'Flexibel beschikbaar op oproepbasis', 'Bij voorkeur eigen auto'],
  },
]
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────────────── */
.vacatures-hero { position: relative; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(10,55,65,0.96) 0%, rgba(14,127,153,0.88) 60%, rgba(31,164,191,0.75) 100%);
}
.hero-content {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; align-items: center; text-align: center;
}
.heading-accent {
  background: linear-gradient(90deg, #a8f0ff, #d6f9ff);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; margin: 1.5rem 0 2.5rem; }
.hero-stats { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
.hero-stats .stat-card { min-width: 130px; }

/* ── List ─────────────────────────────────────────────── */
.vac-list { display: flex; flex-direction: column; gap: 2rem; }

/* ── Card ─────────────────────────────────────────────── */
.vac-card {
  display: grid; grid-template-columns: 290px 1fr;
  border-radius: 20px; overflow: hidden;
  background: var(--white);
  border: 1px solid rgba(31,164,191,0.1);
  box-shadow: 0 4px 24px rgba(31,164,191,0.07), 0 1px 4px rgba(0,0,0,0.04);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.vac-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 56px rgba(31,164,191,0.14), 0 4px 12px rgba(0,0,0,0.06);
}

/* ── Sidebar ──────────────────────────────────────────── */
.vac-sidebar {
  background: linear-gradient(165deg, #0a3640 0%, #0e7f99 100%);
  padding: 2.25rem 1.85rem;
  display: flex; flex-direction: column; gap: 1rem;
  position: relative; overflow: hidden;
}
.vac-sidebar::before {
  content: ''; position: absolute; top: -70px; right: -70px;
  width: 190px; height: 190px; border-radius: 50%;
  background: rgba(31,164,191,0.12); pointer-events: none;
}
.vac-sidebar::after {
  content: ''; position: absolute; bottom: -40px; left: -40px;
  width: 130px; height: 130px; border-radius: 50%;
  background: rgba(255,255,255,0.04); pointer-events: none;
}

.sb-icon {
  width: 50px; height: 50px; border-radius: 13px; position: relative; z-index: 1;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center; color: #fff;
}

.sb-tags { display: flex; gap: 0.4rem; flex-wrap: wrap; position: relative; z-index: 1; }
.sb-tag {
  font-size: 0.63rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  padding: 0.22rem 0.6rem; border-radius: 999px;
}
.sb-tag-sector { background: rgba(255,255,255,0.15); color: #d6f9ff; border: 1px solid rgba(255,255,255,0.2); }
.sb-tag-type   { background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.5); border: 1px solid rgba(255,255,255,0.1); }
.sb-tag-urgent { background: rgba(255,255,255,0.18); color: #fff; border: 1px solid rgba(255,255,255,0.28); font-weight: 800; }

.sb-title { font-size: 1.25rem; font-weight: 800; color: #fff; line-height: 1.2; letter-spacing: -0.02em; position: relative; z-index: 1; }

.sb-location {
  display: flex; align-items: center; gap: 0.4rem;
  font-size: 0.78rem; color: rgba(255,255,255,0.5); position: relative; z-index: 1;
}
.sb-location svg { color: #a8f0ff; flex-shrink: 0; }

.sb-divider { height: 1px; background: rgba(255,255,255,0.08); position: relative; z-index: 1; }

.sb-highlights { display: flex; flex-direction: column; gap: 0.65rem; flex: 1; position: relative; z-index: 1; }
.sb-hl { display: flex; align-items: center; gap: 0.6rem; }
.sb-hl-icon {
  width: 27px; height: 27px; border-radius: 8px; flex-shrink: 0;
  background: rgba(255,255,255,0.1); display: flex; align-items: center;
  justify-content: center; color: #a8f0ff;
}
.sb-hl-label { display: block; font-size: 0.61rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.35); line-height: 1; }
.sb-hl-val   { display: block; font-size: 0.81rem; font-weight: 700; color: rgba(255,255,255,0.85); margin-top: 2px; }

.sb-salary {
  padding: 1rem 1.1rem; border-radius: 14px; position: relative; z-index: 1;
  background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1);
}
.sb-sal-label     { display: block; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 3px; }
.sb-sal-amount    { display: block; font-family: 'Montserrat',sans-serif; font-size: 1.75rem; font-weight: 900; color: #fff; letter-spacing: -0.02em; line-height: 1; }
.sb-sal-note      { display: block; font-size: 0.63rem; color: rgba(255,255,255,0.3); margin-top: 4px; }
.sb-sal-open-text { display: block; font-size: 0.88rem; font-weight: 600; color: rgba(255,255,255,0.5); font-style: italic; }

/* ── Main ─────────────────────────────────────────────── */
.vac-main {
  background: var(--white); padding: 2.25rem 2.5rem;
  display: flex; flex-direction: column; gap: 1.5rem;
}

.vm-header {
  display: flex; align-items: center; justify-content: space-between;
  gap: 1rem; flex-wrap: wrap;
  padding-bottom: 1.25rem; border-bottom: 1px solid rgba(31,164,191,0.1);
}
.vm-status {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.73rem; font-weight: 700; letter-spacing: 0.05em;
  padding: 0.32rem 0.9rem; border-radius: 999px;
}
.vm-status--direct { background: var(--teal-10); color: var(--dark-teal); border: 1px solid rgba(14,127,153,0.2); }
.vm-status--direct svg { color: var(--primary-teal); }
.vm-status--open { background: rgba(31,164,191,0.07); color: var(--primary-teal); border: 1px solid rgba(31,164,191,0.18); }
.vm-status--open svg { color: var(--primary-teal); }

.vm-cta { border-radius: 12px; font-size: 0.87rem; padding: 0.72rem 1.35rem; gap: 0.45rem; }

.vm-body { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; flex: 1; }

.vm-label { display: block; font-size: 0.67rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-light); margin-bottom: 0.65rem; }
.vm-intro { font-size: 0.875rem; color: var(--dark-text); line-height: 1.85; }

.vm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.vm-list li { display: flex; align-items: flex-start; gap: 0.65rem; font-size: 0.845rem; color: var(--dark-text); line-height: 1.55; }

.vm-list--offer .vm-bullet {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--primary-teal); flex-shrink: 0; margin-top: 7px;
}
.vm-check {
  width: 19px; height: 19px; border-radius: 6px; flex-shrink: 0;
  background: var(--teal-10); display: flex; align-items: center;
  justify-content: center; color: var(--primary-teal);
}

.vm-footer {
  display: flex; align-items: center; justify-content: space-between;
  gap: 1rem; flex-wrap: wrap;
  padding-top: 1.25rem; border-top: 1px solid rgba(31,164,191,0.1);
}
.vm-ask {
  display: inline-flex; align-items: center; gap: 0.4rem;
  font-size: 0.79rem; font-weight: 600; color: var(--text-light);
  transition: color 0.2s ease;
}
.vm-ask:hover { color: var(--primary-teal); }
.vm-cta-sm { font-size: 0.83rem; padding: 0.52rem 1.15rem; border-radius: 12px; }

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 1024px) { .vac-card { grid-template-columns: 265px 1fr; } }
@media (max-width: 860px) {
  .vac-card { grid-template-columns: 1fr; }
  .vac-sidebar { padding: 1.75rem; }
  .sb-highlights { flex-direction: row; flex-wrap: wrap; gap: 0.75rem; }
  .vm-body { grid-template-columns: 1fr; gap: 1.5rem; }
}
@media (max-width: 640px) {
  .vac-main { padding: 1.5rem; }
  .vm-header { flex-direction: column; align-items: flex-start; }
  .vm-cta { width: 100%; justify-content: center; }
  .vm-footer { flex-direction: column; align-items: flex-start; }
  .vm-cta-sm { width: 100%; justify-content: center; }
  .hero-actions { flex-direction: column; width: 100%; }
  .hero-actions .btn { width: 100%; justify-content: center; }
}
</style>
