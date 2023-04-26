<!-- 출력순서: 2 -->
<!-- 사진: X -->
<!-- 글자: 하나의 화면 내 출력 -->
<!-- 글자효과: 천천히 올라오는 효과, 문단 별로 -->
<template>
  <div class="hello">
    <img alt="안녕하세요" src="@/assets/mainveiw_0.jpeg">
    <div>
      <span class="my-typing" v-show="showText">저희 결혼식에 초대합니다!</span>
    </div>
    <div>
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
span {
  /* margin-left: calc((100vw - 40rem) / 2);
  margin-right: calc((100vw - 40rem) / 2); */
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
}

.hello {
  background-color: rgb(255, 234, 210);
}

.typing {
  display: block;
  /* text-align: center; */
  /* animation: typing 2s steps(30), blink .5s step-end infinite alternate; */
  /* border-right: 3px solid orange; */
  /* width: 22ch; */
  font-size: 1.5em;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 3px solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  /* letter-spacing: .15em; */
  animation: typing 3s steps(30, end), blink-caret .75s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>