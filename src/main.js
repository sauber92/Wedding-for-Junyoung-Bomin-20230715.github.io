import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import VCalendar from 'v-calendar';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'v-calendar/style.css';
import 'animate.css';

import App from './App'

const routes = [
  { path: '/', component: App },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0}
    }
  }
})

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(VCalendar, {})
app.mount('#app')