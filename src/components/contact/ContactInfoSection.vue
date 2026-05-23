<template>
  <div class="contact-info-section">
    <h2>Contactgegevens</h2>
    <div class="contact-item">
      <h3>📍 Adres</h3>
      <p>Costerweg 1<br />5466AM Veghel<br />Nederland</p>
    </div>
    <div class="contact-item">
      <h3>📞 Telefoon</h3>
      <p><a href="tel:+31628589077">+31 628589077</a></p>
    </div>
    <div class="contact-item">
      <h3>📧 E-mail</h3>
      <p><a href="mailto:info@lmaschoonmaken.nl">info@lmaschoonmaken.nl</a></p>
    </div>
    <div class="contact-item">
      <h3>⏰ Openingstijden</h3>
      <p>Maandag t/m vrijdag<br />08:00 - 18:00</p>
    </div>
  </div>
</template>

<style scoped>
.contact-info-section h2 { margin: 0 0 1.25rem; font-size: 1.4rem; color: var(--dark-text); }
.contact-item { margin-bottom: 1.25rem; }
.contact-item h3 { margin: 0 0 0.4rem; color: var(--dark-text); }
.contact-item p { margin: 0; color: var(--text-light); line-height: 1.6; }
.contact-item a { color: var(--primary-teal); text-decoration: none; }
.contact-item a:hover { text-decoration: underline; }
</style>
