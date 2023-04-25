import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

// import VueNaverMap from 'vue-naver-map'
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

// const my_key = '314qMs2azvPm1b23RSnIJ0qhw3st0mVesQAmFj4L'

const app = createApp(App)
app.use(router)
app.use(VCalendar, {})
// app.use(VueNaverMap, {
//     key: my_key,
//     libraries: ['geocoder']
// })
app.mount('#app')