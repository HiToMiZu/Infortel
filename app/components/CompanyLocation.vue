<!-- components/CompanyLocation.vue -->
<script setup lang="ts">
// Company data - replace with your actual information
const company = ref({
  name: "Infortel Sp. z o. o.",
  address: "ul. Zastawa 18, 17-230 Białowieża",
  phone: "+48 799 123 433",
  emailMZ: "MAREK@INFORTEL.PL",
  emailIZ:"IREK@INFORTEL.PL",
  emailKG: "KG@INFORTEL.PL",
  hours: "Mon-Fri: 9:00 AM - 6:00 PM"
})

// Generate embed URL (no API key required for basic embed)
const embedUrl = computed(() => {
  const baseUrl = "https://www.google.com/maps/embed"
  const query = encodeURIComponent(company.value.address)
  return `${baseUrl}?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-122.0840904!3d37.4220936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${query}!5e${0}!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus`
})


// Directions URL
const directionsUrl = computed(() => {
  const query = encodeURIComponent(company.value.address)
  return `https://www.google.com/maps/dir/?api=1&destination=${query}`
})

// Share location function
const shareLocation = async () => {
  const shareData = {
    title: `${company.value.name} Location`,
    text: `Visit us at: ${company.value.address}`,
    url: directionsUrl.value
  }

  if (navigator.share) {
    try {
      await navigator.share(shareData)
    } catch (err) {
      console.log('Error sharing:', err)
      fallbackShare()
    }
  } else {
    fallbackShare()
  }
}

const fallbackShare = () => {
  navigator.clipboard.writeText(directionsUrl.value)
  // You could show a toast notification here
  alert('Location link copied to clipboard!')
}
</script>

<template>
  <div class="company-location">
    <div class="location-card">
      <!-- Header -->
      <div class="location-header">
        <div class="address">
          <Icon name="mdi:map-marker" class="icon" />
          <h2>{{ company.address }}</h2>
        </div>
      </div>

      <!-- Google Maps Embed -->
      <div class="map-container">
        <iframe
          :src="embedUrl"
          width="100%"
          height="400"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="map-iframe"
        />
      </div>

      <!-- Company Info -->
      <div class="company-info">
        <div class="info-grid">
          <div class="info-item">
            <Icon name="mdi:phone" class="info-icon" />
            <div>
              <h4>Telefon</h4>
              <a :href="`tel:${company.phone}`" class="contact-link">{{ company.phone }}</a>
            </div>
          </div>
          
          <div class="info-item">
            <Icon name="mdi:email" class="info-icon" />
            <div>
              <h4>Email - Marek</h4>
              <a :href="`mailto:${company.emailMZ}`" class="contact-link">{{ company.emailMZ }}</a>
            </div>
          </div>
           <div class="info-item">
            <Icon name="mdi:email" class="info-icon" />
            <div>
              <h4>Email - Irek</h4>
              <a :href="`mailto:${company.emailIZ}`" class="contact-link">{{ company.emailIZ }}</a>
            </div>
          </div>
           <div class="info-item">
            <Icon name="mdi:email" class="info-icon" />
            <div>
              <h4>Email - Księgowość</h4>
              <a :href="`mailto:${company.emailKG}`" class="contact-link">{{ company.emailKG }}</a>
            </div>
          </div>
          
          <div class="info-item">
            <Icon name="mdi:clock" class="info-icon" />
            <div>
              <h4>Godziny Otwarcia</h4>
              <p class="hours">{{ company.hours }}</p>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <NuxtLink to="">
            <button class="btn">
            <Icon name="mdi:directions" />
            Directions
            </button>
          </NuxtLink>

          
          <button @click="shareLocation" class="btn">
            <Icon name="mdi:share" />
            Share Location
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.company-location {
  max-width: 1600px;
  margin: 50px auto;
  padding: 1rem;
}

.location-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.location-header {
  background: linear-gradient(135deg, $primarycolor, $supportcolor);
  color: white;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.address {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  opacity: 0.9;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
}

.map-container {
  position: relative;
  width: 100%;
  height: 400px;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
}

.company-info {
  padding: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.info-icon {
  width: 2rem;
  height: 2rem;
  color: $primarycolor;
  flex-shrink: 0;
}

.info-item h4 {
  font-weight: 600;
  color: black;
  margin-bottom: 0.25rem;
}

.contact-link {
  color: $supportcolor;
  text-decoration: none;
  font-weight: 500;
}

.contact-link:hover {
  text-decoration: underline;
}

.hours {
  color: $gray;
  margin: 0;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  height: 40px;
  text-decoration: none;
  width: 140px;
}

@media (max-width: 640px) {
  .company-location {
    padding: 0.5rem;
  }
  
  .location-header {
    padding: 1.5rem;
  }
  
  .title {
    font-size: 1.5rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
    .btn {
      width: 100%;
    }
  }
}
</style>