import Vue from "vue"
import VueRouter from "vue-router"

import { Home, About, Article, NotFound, Login, Registration } from "../pages"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: "Home",
            path: "/",
            component: Home,
        },
        {
            name: "About",
            path: "/about",
            component: About,
        },
        {
            name: "Article",
            path: "/articles/:articleId",
            props: true,
            component: Article,
        },
        {
            name: "Login",
            path: "/login",
            component: Login,
        },
        {
            name: "Registration",
            path: "/signUp",
            component: Registration,
        },
        {
            name: "NotFound",
            path: "*",
            component: NotFound,
        },
    ],
    mode: "history",
})

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ["/login", "/signUp", "/", "/about"]
    const authRequired = !publicPages.includes(to.path)
    const loggedIn = localStorage.getItem("user")

    if (authRequired && !loggedIn) {
        return next("/login")
    }

    next()
})

export default router
