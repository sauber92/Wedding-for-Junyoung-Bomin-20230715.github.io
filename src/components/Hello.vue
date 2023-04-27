<!-- 출력순서: 2 -->
<!-- 사진: X -->
<!-- 글자: 하나의 화면 내 출력 -->
<!-- 글자효과: 천천히 올라오는 효과, 문단 별로 -->
<template>
  <div class="hello">
    <img alt="hello" src="@/assets/mainveiw_0.gif" class="hello-img">
    <div class="hello-container">
      <h1 class="my-typing" v-show="showText"><mark>We are getting maried!</mark></h1>
      <p class="my-fadeindown-0" v-show="showText">평생의 짝이되어<br/>믿음의 가정을 이루겠습니다.</p>
      <p class="my-fadeindown-1" v-show="showText">저희의 길을 축복해주시고<br/>오셔서 이쁜 모습 많이 담아주세요</p>
      <p class="my-fadeindown-2" v-show="showText">준영, 보면 올림</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloCard',
  data() {
    return {
      showText: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.showText = true;
    }, 3000);
  }
}
</script>

<style scoped>
/* 모바일 버전 */
@media screen and (max-width: 768px) {
  .hello-img {
    top: 10%;
    left: 10%;
    width: 80%;
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  .hello-img {
    top: 15%;
    left: 15%;
    width: 70%;
  }
}
.hello {
  /* background-color: rgb(255, 234, 210); */
  position: relative;
  display: flex;
  justify-content: center;
}

.hello-img {
  position: absolute;
  z-index: 1;
  border-radius: 2%;
  /* border-color: brown; */
}

.hello-container {
  position: absolute;
  display: inline-block;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  z-index: 2;
  /* background-color: rgba(0, 0, 0, 0.301); */
}

.my-animate-typing {
  display: inline-block;
  overflow: hidden;
  font-size: 1.5em;
  white-space: nowrap;
  margin: 0 auto;
  animation:
    typing 3s steps(30, end),
    blink-caret .75s step-end infinite alternate;
}

mark {
  -webkit-animation: 1.5s highlight 1.5s 1 normal forwards;
          animation: 1.5s highlight 1.5s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #ffec7e 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
}

@-webkit-keyframes highlight {
  to {
    background-position: 0 0;
  }
}

@keyframes highlight {
  to {
    background-position: 0 0;
  }
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>