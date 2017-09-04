import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { CHANGE_MSG, INCREMENT_COUNTER} from "./mutation_types";

Vue.use(Vuex)

const state = {
  message: 'Hello Vue!'
}

const mutations = {
  [CHANGE_MSG](state, msg){
    state.message = msg
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})