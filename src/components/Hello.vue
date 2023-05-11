<!-- 출력순서: 2 -->
<!-- 사진: X -->
<!-- 글자: 하나의 화면 내 출력 -->
<!-- 글자효과: 천천히 올라오는 효과, 문단 별로 -->
<template>
  <div class="hello">
    <!-- <img alt="hello" src="@/assets/mainveiw_0.gif" class="hello-img"> -->
    <div class="hello-container">
      <div ref="tag0">
        <h1 class="tag"><span class="highlight">저희 결혼합니다!</span></h1>
      </div>
      <div class="spacer" style="height: 30px"></div>
      <div ref="tag1">
        <p class="tag">평생의 짝이되어<br/>믿음의 가정을 이루겠습니다.</p>
      </div>
      <div class="spacer" style="height: 30px"></div>
      <div ref="tag2" >
        <p class="tag">저희의 길을 축복해주시고<br/>오셔서 이쁜 모습 많이 담아주세요</p>
      </div>
      <div class="spacer" style="height: 30px"></div>
      <div ref="tag3">
        <p class="tag">준영, 보면 올림</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloCard',
  data() {
  },
  mounted() {
    this.createObservers();
  },
  methods: {
    createObservers() {
      const options = {
        rootMargin: '-30px 0px 0px 0px', // viewport top에 100px 마진 추가
        threshold: 1, // 대상 엘리먼트가 뷰포트에 50% 이상 들어왔을 때 콜백 함수 호출
      };

      const observer_0 = new IntersectionObserver((entries) => { // eslint-disable-line no-unused-vars
        if (entries[0].isIntersecting) {
          this.$refs.tag0.querySelector('.tag').classList.add('show', 'typing');
          this.$refs.tag0.querySelector('.highlight').classList.add('show', 'mark');
        } else {
          this.$refs.tag0.querySelector('.tag').classList.remove('show', 'typing');
          this.$refs.tag0.querySelector('.highlight').classList.remove('show', 'mark');
        }
      }, options);

      const observer_1 = new IntersectionObserver((entries) => { // eslint-disable-line no-unused-vars
        if (entries[0].isIntersecting) {
          this.$refs.tag1.querySelector('.tag').classList.add(['show']);
        } else {
          this.$refs.tag1.querySelector('.tag').classList.remove('show');
        }
      }, options);

      const observer_2 = new IntersectionObserver((entries) => { // eslint-disable-line no-unused-vars
        if (entries[0].isIntersecting) {
          this.$refs.tag2.querySelector('.tag').classList.add(['show']);
        } else {
          this.$refs.tag2.querySelector('.tag').classList.remove('show');
        }
      }, options);

      const observer_3 = new IntersectionObserver((entries) => { // eslint-disable-line no-unused-vars
        if (entries[0].isIntersecting) {
          this.$refs.tag3.querySelector('.tag').classList.add(['show']);
        } else {
          this.$refs.tag3.querySelector('.tag').classList.remove('show');
        }
      }, options);

      observer_0.observe(this.$refs.tag0);
      observer_1.observe(this.$refs.tag1);
      observer_2.observe(this.$refs.tag2);
      observer_3.observe(this.$refs.tag3);
    }
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

h1 {
  font-size: 1.5em;
}

.hello {
  height: 80vh;
  position: relative;
  display: flex;
  justify-content: center;
}

.hello-img {
  position: absolute;
  z-index: 1;
  border-radius: 2%;
}

.hello-container {
  position: absolute;
  display: inline-block;
  top: 10%;
  left: 10%;
  width: 80%;
  padding-top: 20%;
  padding-bottom: 20%;
  z-index: 2;
  border: solid;
  border-color: #ffec7e;
}

.tag {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.tag.show {
  opacity: 1;
}

.typing {
  display: inline-block;
  overflow: hidden;
  font-size: 1.5em;
  white-space: nowrap;
  margin: 0 auto;
  animation:
    typing 3s steps(30, end),
    blink-caret .75s step-end infinite alternate;
}

.mark {
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