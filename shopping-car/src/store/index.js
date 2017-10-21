import Vue from "vue";
import vuex from "vuex";
Vue.use(vuex);

import actions from './actions';
import mutations from './mutations';
import state from './state';
import getters from './getters';

export default new vuex.Store({
  actions,mutations,state,getters
})

