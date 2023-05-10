<template>
  <div>
    <router-view>
      <div>
        <IntroCard class="section"/>
        <HelloCard class="section"/>
        <GroomCard class="section"/>
        <BrideCard class="section"/>
        <DateCard class="section"/>
        <TimeCard class="section"/>
        <LocationCard class="section"/>
        <GalleryCard class="section"/>
        <ClosingCard class="section"/>
      </div>
    </router-view>
  </div>
</template>

<script>
import AOS from 'aos'
import "aos/dist/aos.css"
import IntroCard from '@/components/Intro'
import HelloCard from '@/components/Hello'
import GroomCard from './components/Groom.vue'
import BrideCard from './components/Bride.vue'
import DateCard from './components/Date.vue'
import TimeCard from './components/Time.vue'
import LocationCard from './components/Location.vue'
import GalleryCard from './components/Gallery.vue'
import ClosingCard from './components/Closing.vue'

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
  mounted() {
    AOS.init({
      startEvent: 'load',
      disableMutationObserver: false,
      duration: 1000
    })
    AOS.refresh(true)
  }
}
</script>

<style>
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
    width: 768px;;
    font-size: 18px;
  }
}

html {
  animation: blur .7s ease-out ;
  font-family: sans-serif;
  --mdc-typography-font-family: Arial, Helvetica, sans-serif;
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
