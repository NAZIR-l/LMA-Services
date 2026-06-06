<template>
  <footer class="site-footer">
    <!-- Main footer body -->
    <div class="footer-body">
      <div class="footer-grid container">
        <!-- Col 1: Brand -->
        <div class="footer-col footer-brand">
          <img src="https://s3.us-east-1.amazonaws.com/arxgroup.sites/logo-lma.jpeg" alt="LMA Services B.V." class="footer-logo" />
          <p class="brand-tagline">Uw betrouwbare schoonmaakpartner in heel Nederland.</p>
          <div class="footer-contact-info">
            <a href="tel:+31628589077" class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.52 2 2 0 0 1 3.6 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.72-.72a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 17z"/></svg>
              +31 6 285 890 77
            </a>
            <a href="mailto:info@lmaschoonmaken.nl" class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              info@lmaschoonmaken.nl
            </a>
            <div class="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Costerweg 1, 5466AM Veghel
            </div>
          </div>
          <!-- Social -->
          <div class="social-row">
            <a href="#" class="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <!-- Col 2: Pages -->
        <div class="footer-col">
          <h4>Pagina's</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projecten">Projecten</router-link></li>
            <li><router-link to="/diensten">Diensten</router-link></li>
            <li><router-link to="/over-ons">Over ons</router-link></li>
            <li><router-link to="/werken-bij">Werken bij</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </div>

        <!-- Col 3: Services -->
        <div class="footer-col">
          <h4>Onze diensten</h4>
          <ul class="footer-links">
            <li><router-link to="/diensten">Kantoorschoonmaak</router-link></li>
            <li><router-link to="/diensten">Diepe reiniging</router-link></li>
            <li><router-link to="/diensten">Ruiten & gevels</router-link></li>
            <li><router-link to="/diensten">Evenementen reiniging</router-link></li>
            <li><router-link to="/diensten">Horeca personeel</router-link></li>
          </ul>
        </div>

        <!-- Col 4: CTA -->
        <div class="footer-col">
          <h4>Direct contact</h4>
          <p class="footer-cta-text">Bereikbaar maandag t/m vrijdag van 08:00 – 18:00</p>
          <router-link to="/offerte-aanvragen" class="footer-cta-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            Offerte aanvragen
          </router-link>
          <a href="tel:+31628589077" class="footer-phone">+31 6 285 890 77</a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>&copy; 2025 LMA Services B.V. &nbsp;|&nbsp; KVK: 94772878 &nbsp;|&nbsp; BTW: NL866888986B01</p>
        <div class="footer-bottom-links">
          <router-link to="/privacybeleid">Privacybeleid</router-link>
          <router-link to="/algemene-voorwaarden">Algemene voorwaarden</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: linear-gradient(160deg, #0b6478 0%, #0e7f99 40%, #1fa4bf 100%);
  color: rgba(255,255,255,0.88);
}

/* Body */
.footer-body { padding: 4.5rem 0 3rem; }

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 2.5rem;
  align-items: start;
}

.footer-col { display: flex; flex-direction: column; gap: 1rem; }

/* Brand col */
.footer-logo {
  height: 52px;
  width: auto;
  object-fit: contain;
  border-radius: 12px;
}

.brand-tagline {
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.78);
  margin: 0;
}

.footer-contact-info {
  display: grid;
  gap: 0.65rem;
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.82);
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-contact-item:hover { color: white; }
.footer-contact-item svg { flex-shrink: 0; margin-top: 2px; color: rgba(255,255,255,0.6); }

/* Social */
.social-row { display: flex; gap: 0.6rem; margin-top: 0.5rem; }

.social-btn {
  width: 40px; height: 40px;
  border-radius: 12px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.18);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, transform 0.25s ease;
}
.social-btn:hover {
  background: rgba(255,255,255,0.22);
  transform: translateY(-2px);
}

/* Links */
.footer-col h4 {
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: white;
  margin: 0;
}

.footer-links { display: grid; gap: 0.6rem; }

.footer-links li a {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.75);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.2s ease, gap 0.2s ease;
}
.footer-links li a::before {
  content: '›';
  font-size: 1.1rem;
  color: rgba(255,255,255,0.4);
  transition: color 0.2s ease;
}
.footer-links li a:hover { color: white; gap: 0.6rem; }
.footer-links li a:hover::before { color: rgba(255,255,255,0.8); }

/* CTA column */
.footer-cta-text {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.6;
  margin: 0;
}

.footer-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: var(--dark-teal);
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
}
.footer-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}

.footer-phone {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  transition: opacity 0.2s ease;
}
.footer-phone:hover { opacity: 0.85; }

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.12);
  padding: 1.25rem 0;
  background: rgba(0,0,0,0.12);
}

.footer-bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-bottom p {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);
  margin: 0;
}

.footer-bottom-links {
  display: flex;
  gap: 1.5rem;
}

.footer-bottom-links a {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-bottom-links a:hover { color: white; text-decoration: underline; }

/* Responsive */
@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-body { padding: 3rem 0 2rem; }
  .footer-bottom-inner { flex-direction: column; text-align: center; }
  .footer-bottom-links { justify-content: center; }
}
</style>
