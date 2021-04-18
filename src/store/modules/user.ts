import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const initialState = (): IAuth => ({ isLogged: false, user: {} })

const getters = {
	getState: (state: IAuth) => {
		return state
	},
}

const mutations = {
	login(state: ILogged, user: User) {
		state.isLogged = true
		state.user = user

		return state
	},
	logout(state: IAuth) {
		state.isLogged = false

		return state
	},
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	mutations,
}
