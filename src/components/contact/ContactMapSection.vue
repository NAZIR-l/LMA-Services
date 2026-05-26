<template>
  <div class="contact-map">
    <iframe
      src="https://maps.google.com/maps?q=Costerweg%201%2C%205466AM%20Veghel&output=embed"
      width="100%"
      height="380"
      style="border:0; border-radius: 20px; display: block;"
      :allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="LMA Services locatie Veghel"
    ></iframe>
  </div>
</template>

<style scoped>
.contact-map {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 8px 8px 20px rgba(0,0,0,0.09), -8px -8px 20px rgba(255,255,255,0.88);
}
</style>
