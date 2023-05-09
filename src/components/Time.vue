<!-- 출력순서: 6 -->
<!-- 사진: X -->
<template>
  <div class="time">
    <div class="time-container" ref="startCount">{{ currentTime }}</div>
  </div>
</template>
    
<script>
export default {
  name: 'TimeCard',
  data() {
    return {
      targetTime: '11:00',
      currentTime: '10:00',
      timer: null
    }
  },
  mounted() {
    const options = {
      rootMargin: '0px',
      threshold: 0.5, // 대상 엘리먼트가 뷰포트에 50% 이상 들어왔을 때 콜백 함수 호출
    };
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.$refs.startCount);
  },
  methods: {
    callback(entries, observer) {// eslint-disable-line no-unused-vars
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 대상 엘리먼트가 뷰포트에 진입한 경우
          setInterval(() => {
            const [currentHour, currentMinute] = this.currentTime.split(':').map(Number);
            const [targetHour, targetMinute] = this.targetTime.split(':').map(Number);
            
            let nextHour = currentHour;
            let nextMinute = currentMinute + 1;
            if (nextMinute >= 60) {
              nextHour += 1;
              nextMinute = 0;
            }
            
            if (nextHour <= targetHour && (nextHour !== targetHour || nextMinute <= targetMinute)) {
              this.currentTime = `${nextHour.toString().padStart(2, '0')}:${nextMinute.toString().padStart(2, '0')}`;
            } else {
              clearInterval(this.timer);
            }
          }, 20);
        } else {
          // 대상 엘리먼트가 뷰포트를 벗어난 경우
        }
      });
    }
  }
}
</script>

<style scoped>
.time {
  background-color: rgb(194, 255, 199);
  position: relative;
  display: flex;
  justify-content: center;
}

.time-container {
  position: absolute;
  display: inline-block;
  top: 45%;
  left: 0%;
  width: 100%;
}

/* 모바일 버전 */
@media screen and (max-width: 768px) {
  .time-container {
    font-size: 3em;
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  .time-container {
    font-size: 4em;
  }
}
</style>