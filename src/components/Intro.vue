<!-- 출력순서: 1 -->
<!-- 사진: 컨페티를 뿌리는 gif -->
<!-- 글자: 쿼리스트링 사용해서 url에 따라 다르게 출력 -->
<!-- 글자효과: 한번에 디졸브로 나오기 -->
<!-- 순서: gif에서 컨페티가 뿌려질 때 글씨 등장 -->
<template>
  <div class="intro">
    <img alt="Intro" src="@/assets/intro.jpg" class="intro-img">
    <h1 class="intro-container">
      {{ guestName }}{{ guestPostfix }}<br />
      초대합니다!
    </h1>
  </div>
</template>

<script>
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const name = params.get('name');
const postfix = params.get('postfix');

export default {
  name: 'IntroCard',
  props: {
    postfix: String
  },
  computed: {
    guestName() {
      if (queryString && name) {
        return name;
      } else {
        return '';
      }
    },
    guestPostfix() {
      if (queryString && postfix) {
          return postfix;
        } else {
          return '';
      }
    }
  }
}
</script>

<style scoped>
.intro {
  position: relative;
  display: flex;
  justify-content: center;
}

.intro-img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.intro-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  /* background-color: rgba(0, 0, 0, 0.5); */
}
</style>
