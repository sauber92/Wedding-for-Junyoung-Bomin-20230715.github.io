<!-- 출력순서: 5 -->
<!-- 사진: X -->
<!-- 글자: 더컨벤션 잠실 3층 아모르홀 -->
<!-- 글자효과: 스크롤에 따라 어두웠다가 밝아지게 -->
<!-- Maps API 사용 -->
<template>
  <div class="location">
    <h1>오시는 길</h1>
    <div id="map"></div>
    <div class="location-container">
      <h3 class="my-map">더 컨벤션 잠실 3층 <mark>아모르홀</mark></h3>
      <p>버스</p>
      <p>지하철</p>
    </div>
  </div>
</template>
  
<script>
// 잠실 더 컨벤션 위경도
const lat = 37.5157108;
const lng = 127.1057463;

export default {
  name: 'LocationCard',
  components: {
  },
  data() {
    return {
      map: null,
    };
  },
  setup() {},
  created() {},
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  unmounted() {},
  methods: {
    loadScript() {
      const script = document.createElement("script");
      script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=1bd31ed62d4ca98a0aaa79dbe3d1dcda&autoload=false"; //
      script.onload = () => window.kakao.maps.load(this.loadMap);
      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng),
        level: 3
      };

      this.map = new window.kakao.maps.Map(container, options);
      this.loadMaker();
    },
    loadMaker() {
      const markerPosition = new window.kakao.maps.LatLng(
        lat,
        lng
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(this.map);
    }
  },
}
</script>
  
<style scoped>
.location {
  background-color: rgb(255, 235, 252);
  position: relative;
  display: flex;
  justify-content: center;
}

#map {
  position: absolute;
  display: inline-block;
  top: 15%;
  left: 10%;
  width: 80%;
  height: 40%;
}

.location-container {
  position: absolute;
  display: inline-block;
  top: 60%;
  left: 0%;
  width: 100%;
}

mark {
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
</style>