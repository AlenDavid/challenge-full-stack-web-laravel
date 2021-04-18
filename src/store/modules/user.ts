import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type User = {
  snowflake: number;
  name: string;
  email: string;
  type: number;
  flags: number;
};

interface INotLogged {
  isLogged: false;
  user: Record<string, never>;
}

interface ILogged {
  isLogged: true;
  user: User;
}

type IAuth = ILogged | INotLogged;

const initialState = (): IAuth => ({ isLogged: false, user: {} });

const getters = {
  getState: (state: IAuth) => {
    return state;
  },
};

const mutations = {
  login(state: ILogged, user: User) {
    state.isLogged = true;
    state.user = user;

    return state;
  },
  logout(state: IAuth) {
    state.isLogged = false;

    return state;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
};
