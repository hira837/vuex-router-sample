import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { 
            name: 'product', 
            path: '/product', 
            component: ProductList 
        },
        {
            path: '/product/:id',
            component: Product,
            props: route => ({ id: Number(route.params.id) })
        }
    ]
})

export default router