<template>
  <footer class="footer-section">
    <div class="footer-container container">
      <div class="footer-grid">
        <div class="footer-column">
          <img src="/src/assets/logo-lma.jpeg" alt="LMA Services" class="footer-logo" />
          <div class="company-info">
            <p><strong>LMA Services B.V.</strong></p>
            <p>Costerweg 1<br />5466AM Veghel</p>
            <p><a href="tel:+31628589077">+31 628589077</a></p>
            <p><a href="mailto:info@lmaschoonmaken.nl">info@lmaschoonmaken.nl</a></p>
          </div>
        </div>

        <div class="footer-column">
          <h4>Pagina's</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/projecten">Projecten</router-link></li>
            <li><router-link to="/diensten">Diensten</router-link></li>
            <li><router-link to="/over-ons">Over ons</router-link></li>
            <li><router-link to="/werken-bij">Werken bij</router-link></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Onze diensten</h4>
          <ul>
            <li><a href="/diensten#kantoor">Kantoorschoonmaak</a></li>
            <li><a href="/diensten#diepte">Diepe reiniging</a></li>
            <li><a href="/diensten#evenementen">Evenementen</a></li>
            <li><a href="/diensten#horeca">Horeca personeel</a></li>
          </ul>
        </div>

        <div class="footer-column">
          <h4>Volg ons</h4>
          <div class="social-links">
            <a href="#instagram" class="social-icon">Instagram</a>
            <a href="#linkedin" class="social-icon">LinkedIn</a>
            <a href="#facebook" class="social-icon">Facebook</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 LMA Services B.V. | KVK: 94772878 | BTW: NL866888986B01</p>
        <p><a href="#privacy">Privacybeleid</a> | <a href="#terms">Algemene voorwaarden</a></p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-section {
  background: var(--dark-teal);
  color: white;
  padding: 4rem 0 1rem;
}

.footer-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
  padding: 2.5rem 0 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  height: 52px;
  width: auto;
  margin-bottom: 1rem;
  object-fit: contain;
}

.company-info {
  font-size: 0.95rem;
  line-height: 1.8;
}

.company-info a {
  color: white;
  text-decoration: none;
}

.footer-column h4 {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.85rem;
}

.footer-column li {
  font-size: 0.95rem;
}

.footer-column a {
  color: white;
  text-decoration: none;
}

.footer-column a:hover {
  opacity: 0.85;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-icon {
  background: rgba(255, 255, 255, 0.12);
  padding: 0.75rem 1rem;
  border-radius: 999px;
  color: white;
  transition: background 0.25s ease;
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.22);
}

.footer-bottom {
  padding: 1.25rem 0 0;
  text-align: center;
  font-size: 0.9rem;
}

.footer-bottom a {
  color: white;
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
