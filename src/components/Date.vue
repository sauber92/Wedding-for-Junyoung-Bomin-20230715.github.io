<!-- 출력순서: 5 -->
<!-- 사진: X -->
<template>
  <div class="date">
    <div class="date-container" ref="startAnimation">
      <div class="date-month half">
        <span class="font-month animate-month"> {{ month }} </span>
      </div>
      <div class="date-day half">
        <span class="font-day animate-day"> {{ day }} </span>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'DateCard',
  data() {
    return {
      month: '07',
      day: '15',
      isAnimate: true
    }
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 0.5, // 대상 엘리먼트가 뷰포트에 50% 이상 들어왔을 때 콜백 함수 호출
    };
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.$refs.startAnimation);
    this.animateText();
  },
  methods: {
    callback(entries, observer) {// eslint-disable-line no-unused-vars
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 대상 엘리먼트가 뷰포트에 진입한 경우
          if (this.isAnimate) {
            this.animateText();
            this.isAnimate = false;
          }
        } else {
          // 대상 엘리먼트가 뷰포트를 벗어난 경우
        }
      });
    },
    animateText() {
      const month = document.querySelector(".animate-month");
      const day = document.querySelector(".animate-day");

      // Animate month
      month.animate(
        [
          { transform: "translate(-50vw, 20vh)", opacity: 0 },
          { transform: "translate(0, 0)", opacity: 1 },
        ],
        { duration: 1000, easing: "ease-out", fill: "forwards" }
      );

      // Animate day
      day.animate(
        [
          { transform: "translate(50vw, -20vh)", opacity: 0 },
          { transform: "translate(0, 0)", opacity: 1 },
          
        ],
        { duration: 1000, easing: "ease-out", fill: "forwards" }
      );
    },
  }
}
</script>

<style scoped>
.date {
  position: relative;
  display: flex;
}

.date-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0%;
}

.half {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.date-month {
  background-color: rgb(255, 203, 194);
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 65%);
  z-index: 1;
}

.date-day {
  background-color: rgb(194, 251, 255);
  z-index: 0;
}

.font-month {
  position: absolute;
  top: 42%;
  left: 42%;
}

.font-day {
  position: absolute;
  bottom: 42%;
  right: 42%;
}

/* 모바일 버전 */
@media screen and (max-width: 768px) {
  .date-container {
    font-size: 3em;
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  .date-container {
    font-size: 3.5em;
  }
}
</style>