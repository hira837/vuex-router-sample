import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: { name: 'product' } },
        { 
            name: 'product', 
            path: '/product', 
            component: Product 
        }
    ]
})

export default router