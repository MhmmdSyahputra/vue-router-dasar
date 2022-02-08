import Home from "@/view/home"
import About from "@/components/About"
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router