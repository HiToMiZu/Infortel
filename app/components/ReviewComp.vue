<script setup lang="ts">
defineProps({
  customerName: {
    type: String,
    default: 'John Doe',
  },
  customerTitle: {
    type: String,
    default: 'CEO at TechCorp',
  },
  rating: {
    type: Number,
    default: 5,
    validator: (value: number) => value >= 1 && value <= 5,
  },
  review: {
    type: String,
    default:
      'This service absolutely blew my mind! The team delivered exceptional results that exceeded all our expectations!',
  },
  projectType: {
    type: String,
    default: 'Web Development',
  },
  avatar: {
    type: String,
    default: '',
  },
})

const getExclamation = (rating: number) => {
  const exclamations = {
    5: 'WOW!',
    4: 'GREAT!',
    3: 'GOOD!',
    2: 'OK!',
    1: 'MEH!',
  }
  return exclamations[rating as keyof typeof exclamations] || 'COOL!'
}
</script>

<template>
  <div class="comic-review">
    <!-- Rating explosion bubble -->
    <div class="rating-bubble">
      <span class="rating-text">{{ getExclamation(rating) }}</span>
      <div class="stars">
        <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= rating }">★</span>
      </div>
    </div>

    <!-- Main review panel -->
    <div class="review-panel">
      <!-- Project type badge -->
      <div class="project-badge">
        <span>{{ projectType }}</span>
      </div>

      <!-- Customer info -->
      <div class="customer-info">
        <div class="avatar" v-if="avatar">
          <img :src="avatar" :alt="customerName" />
        </div>
        <div class="avatar placeholder" v-else>
          <span>{{ customerName.charAt(0) }}</span>
        </div>

        <div class="customer-details">
          <h3 class="customer-name">{{ customerName }}</h3>
          <p class="customer-title">{{ customerTitle }}</p>
        </div>
      </div>

      <!-- Review speech bubble -->
      <div class="speech-bubble">
        <p class="review-text">"{{ review }}"</p>
        <div class="bubble-tail"></div>
      </div>

      <!-- Comic decorations -->
      <div class="comic-dots"></div>
      <div class="comic-lines"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Color variables
.comic-review {
  border-radius: 20px;
  padding: 25px;
  position: relative;
  min-height: 300px;
  max-width: 400px;
  min-width: 200px;
  margin: 20px;
  box-shadow:
    8px 8px 0 $gray,
    0 0 30px rgba($gray, 0.3);
  transform: rotate(-0.5deg);
  transition: all 0.4s ease;
  overflow: visible;
  font-family: $font-family;

  @media (max-width: 1400px) {
    .rating-bubble {
      animation: bounce 0.6s ease-in-out infinite alternate;
    }

    .comic-dots {
      animation: dots-spin 3s linear infinite;
      z-index: -1;
    }
  }

  &:hover {
    transform: rotate(0deg) scale(1.03);

    .rating-bubble {
      animation: bounce 0.6s ease-in-out infinite alternate;
    }

    .comic-dots {
      animation: dots-spin 3s linear infinite;
      z-index: -1;
    }

    .speech-bubble {
      transform: rotate(0deg);
    }
  }

  .rating-bubble {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 100px;
    height: 100px;
    background: $primarycolor;
    border: 5px solid $gray;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 6px 6px 0 $gray;
    z-index: 10;

    .rating-text {
      color: white;
      font-weight: bold;
      font-size: 16px;
      text-shadow: 2px 2px 0 $gray;
      margin-bottom: 5px;
    }

    .stars {
      display: flex;
      gap: 2px;

      .star {
        color: rgba(white, 0.3);
        font-size: 12px;
        transition: color 0.3s ease;

        &.filled {
          color: #ffd700;
          text-shadow: 1px 1px 0 $gray;
        }
      }
    }
  }

  .review-panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 20px;
  }

  .project-badge {
    align-self: flex-start;
    background: $supportcolor;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    border: 3px solid $gray;
    font-weight: bold;
    font-size: 0.8rem;
    text-shadow: 1px 1px 0 rgba($gray, 0.5);
    box-shadow: 3px 3px 0 $gray;
    transform: rotate(-3deg);

    span {
      display: block;
    }
  }

  .customer-info {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 4px solid $gray;
      box-shadow: 4px 4px 0 $gray;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &.placeholder {
        background: $focus;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        text-shadow: 1px 1px 0 $gray;
      }
    }

    .customer-details {
      flex: 1;

      .customer-name {
        color: $gray;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 3px;
        text-shadow: 1px 1px 0 rgba($primarycolor, 0.2);
      }

      .customer-title {
        color: $supportcolor;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }

  .speech-bubble {
    background: white;
    border: 4px solid $gray;
    border-radius: 25px;
    padding: 20px;
    position: relative;
    box-shadow: 4px 4px 0 $gray;
    transform: rotate(1deg);
    transition: transform 0.3s ease;
    flex-grow: 1;

    .review-text {
      color: $gray;
      font-size: 1rem;
      line-height: 1.5;
      font-style: italic;
      margin: 0;
      text-align: center;
    }

    .bubble-tail {
      position: absolute;
      bottom: -18px;
      left: 40px;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid white;

      &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: -24px;
        width: 0;
        height: 0;
        border-left: 24px solid transparent;
        border-right: 24px solid transparent;
        border-top: 24px solid $gray;
      }
    }
  }

  .comic-dots {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 50px;
    height: 50px;
    background-image: radial-gradient(circle, $primarycolor 3px, transparent 3px);
    background-size: 10px 10px;
    opacity: 0.3;
    border-radius: 50%;
    z-index: -1;
  }

  .comic-lines {
    position: absolute;
    bottom: 25px;
    right: 25px;
    width: 80px;
    height: 40px;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 3px,
      $supportcolor 3px,
      $supportcolor 5px
    );
    opacity: 0.2;
    border-radius: 10px;
  }
}

// Animations
@keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-8px);
  }
}

@keyframes dots-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

// Responsive design
@media (max-width: 768px) {
  .comic-review {
    margin: 15px 0;
    min-height: 280px;

    .rating-bubble {
      width: 80px;
      height: 80px;
      top: -15px;
      right: -15px;

      .rating-text {
        font-size: 14px;
      }

      .stars .star {
        font-size: 10px;
      }
    }

    .customer-info {
      .avatar {
        width: 50px;
        height: 50px;

        &.placeholder {
          font-size: 1.2rem;
        }
      }

      .customer-details {
        .customer-name {
          font-size: 1.1rem;
        }

        .customer-title {
          font-size: 0.8rem;
        }
      }
    }

    .speech-bubble {
      .review-text {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
