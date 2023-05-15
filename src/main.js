import { createApp } from 'vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import 'animate.css';

import App from './App'


const vuetify = createVuetify({
  components,
  directives,
})

/* add icons to the library */
library.add(faMagnifyingGlass, faCircleXmark)

gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')