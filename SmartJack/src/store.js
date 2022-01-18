import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    first: '1번 문제',
    seconde: '2번 문제',
  }
});
