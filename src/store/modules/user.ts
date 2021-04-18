import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const initialState = (): IAuth => {
	return { isLogged: false }
}

export default new Vuex.Store({
	state: initialState,
	getters: {
		isLogged(state) {
			return state.isLogged
		},
		user(state) {
			if (state.isLogged === true) {
				return state.user
			}

			return {}
		},
	},
	mutations: {
		login(state: any, user: User) {
			Vue.set(state, "isLogged", true)
			Vue.set(state, "user", user)
		},
		logout(state: any) {
			console.log("logout")

			Vue.set(state, "isLogged", false)
			Vue.set(state, "user", undefined)
		},
	},
})
