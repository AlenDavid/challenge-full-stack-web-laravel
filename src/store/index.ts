import Vue from "vue"
import Vuex from "vuex"
import user from "./modules/user"

Vue.use(Vuex)

// eslint-disable-next-line
const store: any = new Vuex.Store({
	modules: {
		user,
	},
})

export default store
