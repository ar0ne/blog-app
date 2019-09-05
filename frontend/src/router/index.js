import Vue from 'vue'
import VueRouter from 'vue-router'

import {
    Home,
    About,
    Article,
    NotFound
} from '../pages'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/',
            component: Home
        },
        {
            name: 'About',
            path: '/about',
            component: About
        },
        {
            name: 'Article',
            path: '/articles/:articleId',
            props: true,
            component: Article
        },
        {
            name: 'NotFound',
            path: '*',
            component: NotFound
        }
    ],
    mode: 'history'
})