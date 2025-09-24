<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "placeholder",
  },
  desc: {
    type: String,
    default: "placeholder",
  },
  tech: {
    type: String,
    default: `Vue, Django`,
  },
  image: {
    type: String,
    default: "/header-bg.jpeg",
  },
  github: {
    type: String,
    default: "https://github.com",
  },
  site: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="main">
    <div class="image-container">
      <img :src="image" alt="Project preview" />
    </div>
    <div class="content">
      <div class="text">
        <h3 class="name">{{ title }}</h3>
        <p class="desc">{{ desc }}</p>
        <p class="tech">What we've used: {{ tech }}</p>
      </div>
      <div class="link">
        <a :href="github" target="_blank" rel="noopener noreferrer">
          <button class="btn iconed">
            <Icon name="uil:github" class="icon" />
          </button>
        </a>
        <a :href="github" target="_blank" rel="noopener noreferrer">
          <button class="btn iconed">
            <Icon name="ix:web-browser-screen" class="icon" />
          </button>
        </a>
        <router-link to="/projects">
          <button class="btn">Get to know more</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  min-width: 0;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
}

.image-container {
  flex: 0 0 auto;
  padding: 10px;

  @media (min-width: 768px) {
    flex: 0 0 40%;
    padding: 20px;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    outline: 3px solid $gray;
    border-radius: 10px;

    @media (min-width: 480px) {
      height: 250px;
      border-radius: 15px;
      outline-width: 4px;
    }

    @media (min-width: 768px) {
      height: 300px;
      border-radius: 20px;
      outline-width: 6px;
    }

    @media (min-width: 1024px) {
      height: 350px;
      max-height: 460px;
    }
  }
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  position: relative;

  @media (min-width: 768px) {
    padding: 20px;
  }
}

.text {
  flex: 1;

  .name {
    text-align: center;
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    margin: 0.5rem 0 1rem 0;
    font-weight: bold;
    line-height: 1.2;

    @media (min-width: 768px) {
      text-align: left;
      font-size: clamp(1.5rem, 2vw, 2.2rem);
    }
  }

  .desc {
    letter-spacing: 0.5px;
    font-size: clamp(0.875rem, 2vw, 1rem);
    margin-bottom: 1rem;
    color: #666;
    line-height: 1.5;

    @media (min-width: 480px) {
      letter-spacing: 1px;
      font-size: clamp(0.9rem, 1.5vw, 1.1rem);
    }

    @media (min-width: 768px) {
      margin-bottom: 2rem;
      font-size: clamp(1rem, 1.3vw, 1.2rem);
    }
  }

  .tech {
    font-size: clamp(0.8rem, 2vw, 1rem);
    color: #666;
    font-weight: 500;

    @media (min-width: 480px) {
      font-size: clamp(0.875rem, 1.5vw, 1rem);
    }

    @media (min-width: 768px) {
      font-size: clamp(0.9rem, 1.3vw, 1.1rem);
    }
  }
}

.link {
  align-self: center;
  transition: all 0.3s ease;
  margin-top: 1rem;
  transform: translateY(0);

  @media (min-width: 768px) {
    align-self: flex-end;
    margin: 0 0 1rem auto;
    transform: translateY(100px);
  }

  .btn {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    background-color: white;
    border: 2px solid $gray;
    transition: all 0.3s ease;
    height: 36px;
    width: 120px;
    font-size: 0.875rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    margin: 0 10px;
    transform: rotate(0deg);

    @media (min-width: 480px) {
      height: 40px;
      width: 160px;
      font-size: 1rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      margin: 10px 0;
    }

    @media (min-width: 768px) {
      height: 44px;
      width: 160px;
      box-shadow: 0 0 2rem 0 rgb(0 0 0 / 0.2);
      margin: 10px 0;
    }

    &:hover {
      background-color: $primarycolor;
      color: white;
      border-color: $primarycolor;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);

      @media (min-width: 768px) {
        transform: translateY(-4px);
      }
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
  .iconed {
    padding: 10px;
    width: 40px;
    border-radius: 10000px;
  }
}

// Hover effect for the entire card on larger screens
@media (min-width: 768px) {
  .main:hover .link {
    transform: translateY(15px);
  }
}

// Touch-friendly adjustments for mobile
@media (max-width: 767px) {
  .text .name {
    margin-bottom: 0.75rem;
  }

  .text .desc {
    margin-bottom: 0.75rem;
  }
  .link .iconed {
    width: 40px;
    margin: 10px;
  }
  .link .btn {
    margin: 10px;
  }
}

// Extra small screens
@media (max-width: 479px) {
  .image-container {
    padding: 8px;
  }
  .content {
    padding: 8px;
  }

  .text .name {
    font-size: 1.1rem;
  }

  .link .btn {
    height: 38px;
    width: 140px;
    font-size: 0.8rem;
    margin-top: 5px;
  }
  .link .iconed {
    width: 40px;
  }
}
</style>
