import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "./router"
import AsyncComputed from "vue-async-computed"
import VMask from "v-mask"

Vue.config.productionTip = false

Vue.use(AsyncComputed)
Vue.use(VMask)

new Vue({
	vuetify,
	router,
	render: (h) => h(App),
}).$mount("#app")
