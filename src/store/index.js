import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
   state() {
      return{
         users: []
      }
   },
   actions: {},
   mutations: {},
   getters: {},  
   modules: {}
})

export default store;