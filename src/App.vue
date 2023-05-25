<template>
  <div class="alert" v-if="isScreenHeightTooSmall">
    <p>죄송합니다.</p>
    <p>기기 화면의 세로 길이가 너무 작습니다.</p>
    <p>화면을 전환하시거나 다른 기기를 이용해주세요.</p>
  </div>
  <div v-if="!isScreenHeightTooSmall">
    <IntroCard class="section"/>
    <HelloCard class="section"/>
    <GroomCard class="section"/>
    <BrideCard class="section"/>
    <DateCard class="section"/>
    <TimeCard class="section"/>
    <SearchCard class="section"/>
    <LocationCard class="section"/>
    <GalleryCard class="section"/>
    <ClosingCard class="section"/>
    <FooterCard class="section"/>
  </div>
</template>

<script>
import AOS from 'aos'
import "aos/dist/aos.css"
import { gsap } from 'gsap'

import IntroCard from '@/components/Intro'
import HelloCard from '@/components/Hello'
import GroomCard from '@/components/Groom.vue'
import BrideCard from '@/components/Bride.vue'
import DateCard from '@/components/Date.vue'
import TimeCard from '@/components/Time.vue'
import SearchCard from '@/components/Search.vue'
import LocationCard from '@/components/Location.vue'
import GalleryCard from '@/components/Gallery.vue'
import ClosingCard from '@/components/Closing.vue'
import FooterCard from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    IntroCard,
    HelloCard,
    GroomCard,
    BrideCard,
    DateCard,
    TimeCard,
    SearchCard,
    LocationCard,
    GalleryCard,
    ClosingCard,
    FooterCard
  },
  data() {
    return {
      screenHeightThreshold: 600 // 세로 길이 임계값
    }
  },
  beforeMount() {
    AOS.init({
      startEvent: 'load',
      disableMutationObserver: false,
      duration: 1000
    })
    AOS.refresh(true)
  },
  mounted() {
    this.scrollAnimation();
  },
  computed: {
    isScreenHeightTooSmall() {
      return window.innerHeight < this.screenHeightThreshold;
    }
  },
  methods: {
      scrollAnimation() {
        gsap.timeline({ // HelloCard
          scrollTrigger: {
            trigger: ".hello",
            start: "top+=5px center",
            end: "bottom top",
          }
        })
        .from(".msg1", { opacity: 0 })
        .from(".msg2", { opacity: 0 })

        gsap.timeline({ // GroomCard
          scrollTrigger: {
            trigger: ".groom",
            start: "top+=5px center",
            end: "bottom top",
          }
        })
        .from(".groom-container .parent", { opacity: 0 })
        .from(".groom-container .child", { opacity: 0 })

        gsap.timeline({ // BridCard
          scrollTrigger: {
            trigger: ".bride",
            start: "top+=5px center",
            end: "bottom top",
          }
        })
        .from(".bride-container .parent", { opacity: 0 })
        .from(".bride-container .child", { opacity: 0 })

        gsap.timeline({ // DateCard
          scrollTrigger: {
            trigger: ".date",
            start: "top center",
            end: "top bottom",
          }
        })

        gsap.timeline({ // TimeCard
          scrollTrigger: {
            trigger: ".time",
            start: "top center",
            end: "center center",
          }
        })
        .from(".time .container", { opacity: 0 })

        gsap.timeline({ // SearchCard
          scrollTrigger: {
            trigger: ".search",
            start: "top center",
            end: "center center",
          }
        })
        .from(".search-box", { opacity: 0 })
        .from(".search-txt", { opacity: 0 })

        gsap.timeline({ // LocationCard
          scrollTrigger: {
            trigger: ".location",
            start: "top+=5px center",
            end: "center top",
          }
        })
        .from(".title", { opacity: 0 })
        .from(".map", { opacity: 0 })
        .from(".location .container", { opacity: 0 })
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'SunBatang-Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/SunBatang-Light.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'MaruBuri-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* 모바일 버전 */
@media screen and (max-width: 768px) {
  body {
    width: 100%;
    font-size: 14px;
    color: #221815;
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  body {
    width: 600px;;
    font-size: 18px;
    color: #221815;
  }
}

html {
  animation: blur .7s ease-out ;
  font-family: 'SunBatang-Light';
  /* font-family: 'MaruBuri-Regular'; */
  --mdc-typography-font-family: 'SunBatang-Light';
  /* --mdc-typography-font-family: 'MaruBuri-Regular'; */
  line-height: 1.15;
  overscroll-behavior-x: none;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: none;
  -webkit-tap-highlight-color: transparent;
}

html::-webkit-scrollbar {
  display: none;
  -webkit-overflow-scrolling: touch;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(189, 189, 189);
  margin: 0 auto;
  padding: 0;
  font-family: 'SunBatang-Light';
  /* font-family: 'MaruBuri-Regular'; */
  font-weight: 400;
  line-height: 1.5;
  color: #221815;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden !important;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

@media (max-width: 600px) {
  body {
    transform: rotate(90deg);
    transform-origin: left top;
    width: 100vh;
    height: 100vw;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
}

img {
  width:100%
}

a {
    color: #aaa;
    text-decoration: none !important;
}
a:link { text-decoration: none !important; }
a:hover { text-decoration: none !important; }
a:active { text-decoration: none !important; }
a:visited { text-decoration: none !important; }

button, [role="button"] {
  color: #212529;
  cursor: pointer;
}

button, select {
  text-transform: none;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

#app {
  background-color: #FFFFFFFF;
  font-family: 'SunBatang-Light';
  /* font-family: 'MaruBuri-Regular'; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #221815;
  width: 100%;
  margin: 0 auto;
}

.section {
  height: 100vh;
  display: flex;
  justify-content: center;
}

footer {
  font-weight: 500;
  color: aliceblue;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.alert {
  height: 100vh;
  padding-top: 15%;
  background-color: rgb(255, 208, 187);
}
</style>
