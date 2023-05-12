<template>
  <div>
    <IntroCard class="section" ref="headerRef"/>
    <HelloCard class="section"/>
    <GroomCard class="section"/>
    <BrideCard class="section"/>
    <DateCard class="section"/>
    <TimeCard class="section"/>
    <LocationCard class="section"/>
    <GalleryCard class="section"/>
    <ClosingCard class="section" ref="footerRef"/>
  </div>
</template>

<script>
import AOS from 'aos'
import "aos/dist/aos.css"
import IntroCard from '@/components/Intro'
import HelloCard from '@/components/Hello'
import GroomCard from '@/components/Groom.vue'
import BrideCard from '@/components/Bride.vue'
import DateCard from '@/components/Date.vue'
import TimeCard from '@/components/Time.vue'
import LocationCard from '@/components/Location.vue'
import GalleryCard from '@/components/Gallery.vue'
import ClosingCard from '@/components/Closing.vue'

export default {
  name: 'App',
  components: {
    IntroCard,
    HelloCard,
    GroomCard,
    BrideCard,
    DateCard,
    TimeCard,
    LocationCard,
    GalleryCard,
    ClosingCard,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      footerHeight: 0
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
    this.footerHeight = this.$refs.footerRef.$el.clientHeight;
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
    font-family: 'MapoGoldenPier';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoGoldenPierA.woff') format('woff');
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
  }
}

/* 데스크탑 버전 */
@media screen and (min-width: 769px) {
  body {
    width: 600px;;
    font-size: 18px;
  }
}

html {
  animation: blur .7s ease-out ;
  /* font-family: 'SunBatang-Light'; */
  font-family: 'MaruBuri-Regular';
  /* --mdc-typography-font-family: 'SunBatang-Light'; */
  --mdc-typography-font-family: 'MaruBuri-Regular';
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
  /* font-family: 'SunBatang-Light'; */
  font-family: 'MaruBuri-Regular';
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: none;
  min-height: 100vh;
  min-height: -webkit-fill-available;
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
  /* font-family: 'SunBatang-Light'; */
  font-family: 'MaruBuri-Regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
