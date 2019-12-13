import Vue from "vue";
import Vuex from "vuex";
import evaluationCriteria from '@/Model/evaluationCriteria.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    evaluations: Array<evaluationCriteria>(),
  },
  
  mutations: {
    addEvaluation(state, evaluationCriteria: evaluationCriteria) {
      state.evaluations.push(evaluationCriteria);
    }
  },

  actions: {
    addEvaluation(context, evaluationCriteria: evaluationCriteria) {
      context.commit('addEvalation', evaluationCriteria);
    }
  },
  modules: {}
});
