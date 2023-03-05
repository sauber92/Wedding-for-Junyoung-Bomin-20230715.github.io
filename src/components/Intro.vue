<!-- 출력순서: 1 -->
<!-- 사진: 컨페티를 뿌리는 gif -->
<!-- 글자: 쿼리스트링 사용해서 url에 따라 다르게 출력 -->
<!-- 글자효과: 한번에 디졸브로 나오기 -->
<!-- 순서: gif에서 컨페티가 뿌려질 때 글씨 등장 -->
<template>
  <div class="intro">
    <img alt="안녕하세요" src="../assets/mainveiw_0.jpeg">
    <h1>
      {{ reciever_name }}{{ postfix }},<br />
      나 결혼해
  </h1>
  </div>
</template>

<script>
export default {
  name: 'IntroCard',
  props: {
    reciever_name: String,
    postfix: String
  }
}
</script>

<style scoped>

</style>
