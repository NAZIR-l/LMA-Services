<template>
  <section class="overons-hero">
    <div class="container">
      <div class="section-header">
        <h1>Over LMA Services</h1>
        <p>Uw betrouwbare partner voor professionele schoonmaakcontracten in heel Nederland</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.overons-hero {
  background: linear-gradient(135deg, rgba(31, 164, 191, 0.98) 0%, rgba(14, 127, 153, 0.98) 100%);
  padding: 4rem 0;
  color: white;
  text-align: center;
}

.section-header h1 {
  margin: 0 0 1rem;
  font-size: clamp(2.4rem, 4vw, 3.6rem);
}

.section-header p {
  margin: 0;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.92);
  max-width: 50rem;
  margin: 0 auto;
}

@media (max-width: 720px) {
  .overons-hero { padding: 3rem 0; }
}
</style>
