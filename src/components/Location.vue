<!-- 출력순서: 7 -->
<!-- 사진: X -->
<!-- 글자: 더컨벤션 잠실 3층 아모르홀 -->
<!-- 글자효과: 스크롤에 따라 어두웠다가 밝아지게 -->
<!-- Maps API 사용 -->
<template>
  <div class="location" ref="startAnimation">
    <div class="box">
      <span class="icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" bounce size="xs"/>
      </span>
    </div>
    <div class="search">
      <h1 :class="{typing: isActive}">더 컨벤션 잠실점</h1>
    </div>
    <div>
      <div id="map" data-aos="fade" data-aos-delay="0" data-aos-duration="2000" data-aos-once="true"></div>
    </div>
    <div class="location-container">
      <h3><span :class="{mark: isActive}">3층 아모르홀</span></h3>
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
      isActive: false
    };
  },
  mounted() {
    const options = {
      rootMargin: '10px',
      threshold: 0.5, // 대상 엘리먼트가 뷰포트에 50% 이상 들어왔을 때 콜백 함수 호출
    };
    const observer = new IntersectionObserver(this.callback, options);
    observer.observe(this.$refs.startAnimation);

    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  methods: {
    callback(entries, observer) {// eslint-disable-line no-unused-vars
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 대상 엘리먼트가 뷰포트에 진입한 경우
          if (!this.isActive) {
            this.isActive = true;
          }
        } else {
          // 대상 엘리먼트가 뷰포트를 벗어난 경우
          this.isActive = false;
        }
      });
    },
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
  top: 20%;
  left: 10%;
  width: 80%;
  height: 40%;
}

.location-container {
  position: absolute;
  display: inline-block;
  top: 70%;
  left: 0%;
  width: 100%;
}

.mark {
  -webkit-animation: 1.0s highlight 1.0s 1 normal forwards;
          animation: 1.0s highlight 1.0s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #ffec7e 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
}

.box {
  position: absolute;
  display: inline-block;
  top: 10%;
  width: 80%;
  min-height: 2.5em;
  background-color: rgb(255, 255, 255);
  border-radius: 1.3em;
  z-index: 0;
}

.search {
  position: absolute;
  top: 10.2%;
  z-index: 1;
}

.box .icon {
  position: absolute;
  /* display: inline-block; */
  top: 20%;
  left: 8%;
}

.search h1 {
  font-size: 1.5em;
  font-weight: 300;
}

.typing {
  display: inline-block;
  overflow: hidden;
  font-size: 1.5em;
  white-space: nowrap;
  margin: 0 auto;
  border-right: .15em solid rgb(37, 37, 37);
  letter-spacing: .15em;
  animation:
    typing 3s steps(30),
    blink-caret .75s step-end infinite alternate;
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