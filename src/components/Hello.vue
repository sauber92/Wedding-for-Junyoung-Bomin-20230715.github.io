<!-- 출력순서: 2 -->
<!-- 사진: X -->
<!-- 글자: 하나의 화면 내 출력 -->
<!-- 글자효과: 천천히 올라오는 효과, 문단 별로 -->
<template>
  <div class="hello">
    <img alt="안녕하세요" src="@/assets/mainveiw_0.jpeg">
    <div>
      <p>안녕하세요, 저희 결혼식에 초대합니다!</p>
    </div>
    <div>
      <p>평생의 짝이되어<br/>믿음의 가정을 이루겠습니다.</p>
    </div>
    <div>
      <p>저희의 길을 축복해주시고<br/>오셔서 이쁜 모습 많이 담아주세요</p>
    </div>
    <div>
      <p>준영, 보면 올림</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloCard',
  props: {

  }
}
</script>

<style scoped>
</style>