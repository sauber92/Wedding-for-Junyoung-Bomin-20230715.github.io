<!-- 출력순서: 3 -->
<!-- 사진: 준영, 보민 사진 각각 -->
<!-- 글자: 신랑 준영, 신부 보민 -->
<!-- 글자효과: 스크롤에 따라 사진 위or오른쪽에 글자 나오게 -->
<template>
  <div class="groombride">
    <img alt="bride" src="@/assets/bride.jpg" class="bride-img groombride-img">
    <div class="bride-container groombride-container">
      <p>신부 전보민</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroombrideCard',
  props: {

  }
}
</script>

<style scoped>
.groombride {
  position: relative;
  display: flex;
  justify-content: center;
}

.groombride-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.groombride-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  /* background-color: rgba(0, 0, 0, 0.5); */
}
</style>