<template>
  <section class="projecten-hero">
    <div class="container">
      <div class="section-header">
        <h1>Onze afgeronde opdrachten</h1>
        <p>Een selectie van onze projecten in kantoor, horeca, evenementen en industrie.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projecten-hero {
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
  .projecten-hero { padding: 3rem 0; }
}
</style>
