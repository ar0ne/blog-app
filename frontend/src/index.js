import Vue from "vue"
import vuetify from "./plugins/vuetify"
import App from "./App.vue"
import router from "./router"

new Vue({
    router,
    vuetify,
    render: h => h(App),
}).$mount("#app")
