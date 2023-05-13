<!-- 출력순서: 3 -->
<!-- 사진: 준영, 보민 사진 각각 -->
<!-- 글자: 신랑 준영, 신부 보민 -->
<!-- 글자효과: 스크롤에 따라 사진 위or오른쪽에 글자 나오게 -->
<template>
  <div class="groom">
    <img alt="groom" src="@/assets/groom.jpg" class="groom-img">
    <div class="groom-container">
      <div class="parent">
        <span>
          <span class="name">정진열ㆍ유재희</span><span>의 장남</span>
        </span>
      </div>
      <div class="child">
        <span>신랑 </span><span class="name">정준영</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroomCard'
}
</script>

<style scoped>
.groom {
  position: relative;
  display: flex;
  justify-content: center;
  height: 100vh;
}

.groom-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.groom-container {
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
  top: 5%;
  left: 50%;
  width: max-content;
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
  top: 15%;
  right: 5%;
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