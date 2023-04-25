import { createWebHashHistory, createRouter } from 'vue-router'
import AppCard from '@/App'
// import HelloCard from '@/components/Hello'

const routes = [
    { path: '/', component: AppCard },
    // { path: '/hello', component: HelloCard }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})