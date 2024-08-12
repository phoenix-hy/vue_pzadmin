import {createRouter} from 'vue-router'

import Layout from '../views/Main.vue'
import Login from '../views/login/index.vue'
const routes = [
    {
        path:'/',
        component: Layout
    },
    {
        path:'/login',
        component: Login
    }
]

createRouter({
    
})