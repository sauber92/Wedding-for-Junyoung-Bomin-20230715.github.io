<!-- 출력순서: 1 -->
<!-- 사진: 컨페티를 뿌리는 gif -->
<!-- 글자: 쿼리스트링 사용해서 url에 따라 다르게 출력 -->
<!-- 글자효과: 한번에 디졸브로 나오기 -->
<!-- 순서: gif에서 컨페티가 뿌려질 때 글씨 등장 -->
<template>
  <div class="intro">
    <img alt="안녕하세요" src="../assets/mainveiw_0.jpeg">
    <h1>
      {{ guestName }}{{ guestPostfix }},<br />
      {{ guestMessage }}
    </h1>
  </div>
</template>

<script>
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const name = params.get('name');
const postfix = params.get('postfix');
const message = params.get('message');

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
        return '안녕하세요';
      }
    },
    guestPostfix() {
      let ret;
      if (queryString && postfix) {
        switch (postfix) {
          case '1':
            ret = '아';
            break;
          case '2':
            ret = '야';
            break;
          default:
            ret = '';
            break;
        }
        return ret;
      } else {
        return '안녕하세요';
      }
    },
    guestMessage() {
      let ret;
      if (queryString && message) {
        switch (message) {
          case '1':
            ret = '안녕';
            break;
          case '2':
            ret = '안녕하세요';
            break;
          default:
            ret = '';
            break;
        }
        return ret;
      } else {
        return '안녕하세요';
      }
    }
  }
}
</script>

<style scoped>
img {
  width:100%
}
</style>
