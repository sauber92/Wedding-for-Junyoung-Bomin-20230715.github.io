<template>
  <IntroCard reciever_name="민채" postfix="야"/>
  <HelloCard/>
  <GroombrideCard/>
  <CalendarCard/>
  <LocationCard/>
  <GalleryCard/>
  <ClosingCard/>
  <TestCard/>
</template>

<script>
import IntroCard from './components/Intro.vue'
import HelloCard from './components/Hello.vue'
import GroombrideCard from './components/Groombride.vue'
import CalendarCard from './components/Calendar.vue'
import LocationCard from './components/Location.vue'
import GalleryCard from './components/Gallery.vue'
import ClosingCard from './components/Closing.vue'
import TestCard from './components/Test.vue'

export default {
  name: 'App',
  components: {
    IntroCard,
    HelloCard,
    GroombrideCard,
    CalendarCard,
    LocationCard,
    GalleryCard,
    ClosingCard,
    TestCard
  }
}
</script>

<style>
html::-webkit-scrollbar {
    display: none;
    -webkit-overflow-scrolling: touch;
}

body {
    width: 100%;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: none;
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
