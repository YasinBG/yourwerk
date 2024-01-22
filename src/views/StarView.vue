<template>
    <div ref="starsContainer" id="stars"></div>
  </template>
  
  <script>
  import { onMounted, ref, nextTick } from 'vue';
  import { gsap } from 'gsap';
  
  export default {
    setup() {
      const starsContainer = ref(null);
  
      function drawStars() {
        const tmpStar = document.createElement('figure');
        tmpStar.className = "star";
        tmpStar.style.top = `${Math.random() * 100}%`;
        tmpStar.style.left = `${Math.random() * 100}%`;
        starsContainer.value.appendChild(tmpStar);
      }
  
      function animateStar(star) {
        gsap.to(star, {
          duration: Math.random() * 0.5 + 0.5,
          opacity: Math.random(),
          onComplete: () => animateStar(star)
        });
      }
  
      onMounted(() => {
        nextTick(() => {
          for (let i = 0; i < 200; i++) {
            drawStars();
          }
  
          const stars = starsContainer.value.querySelectorAll('.star');
          stars.forEach(animateStar);
        });
      });
  
      return {
        starsContainer
      };
    }
  }
  </script>
  
  <style>
  #stars {
    width: 100vw;
    height: 400px;
    position: relative;
    overflow: hidden;
  }
  
  .star {
    box-shadow: 0px 0px 1px 1px rgba(255, 255, 255, 0.4);
    position: absolute;
    width: 1px;
    height: 1px;
    border-radius: 2px;
    background-color: white;
  }
  </style>
  