<!-- 출력순서: 5 -->
<!-- 사진: X -->
<!-- 글자: 더컨벤션 잠실 3층 아모르홀 -->
<!-- 글자효과: 스크롤에 따라 어두웠다가 밝아지게 -->
<!-- Maps API 사용 -->
<template>
    <div class="location">
        <p>Location Card</p>
        <!-- <naver-map :center="center" :zoom="zoom">
          <naver-map-marker :position="center" />
        </naver-map> -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'LocationCard',
    data() {
      return {
        center: {
          lat: 37.567545,
          lng: 126.977335
        },
        zoom: 13
      };
    }
  }
</script>
  
  <style scoped>
  p {
    background-color:green;
  }
  </style>