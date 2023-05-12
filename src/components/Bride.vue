<!-- 출력순서: 3 -->
<!-- 사진: 준영, 보민 사진 각각 -->
<!-- 글자: 신랑 준영, 신부 보민 -->
<!-- 글자효과: 스크롤에 따라 사진 위or오른쪽에 글자 나오게 -->
<template>
  <div class="groombride">
    <img alt="bride" src="@/assets/bride.jpg" class="bride-img groombride-img">
    <div class="bride-container groombride-container">
      <div class="parent">
        <span data-aos="fade-up" data-aos-delay="300" data-aos-duration="2000">
          <span class="name">전이원ㆍ양영옥</span><span>의 장녀</span>
        </span>
      </div>
      <div class="child" data-aos="fade-down" data-aos-delay="300" data-aos-duration="2000">
        <span>신부 </span><span class="name">전보민</span>
      </div>
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
  height: 100vh;
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

.parent {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  line-height: 2;
  letter-spacing : 4px;
}
.parent .name {
  font-size: 1.2em;
  font-weight: 600;
}

.child {
  position: absolute;
  top: 40%;
  left: 5%;
  transform: translate(-50%, -50%);
  font-size: 1em;
  writing-mode: vertical-lr;
  letter-spacing: 4px;
}

.child .name {
  font-size: 1.2em;
  font-weight: 700;
}
</style>