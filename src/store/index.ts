import Vue from "vue";
import Vuex from "vuex";
import evaluationCriteria from '@/Model/evaluationCriteria.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    evaluations: Array<evaluationCriteria>(),
  },
  mutations: {},
  actions: {},
  modules: {}
});
