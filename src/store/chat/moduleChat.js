/*=========================================================================================
  File Name: moduleChat.js
  Description: Chat Module
  ----------------------------------------------------------------------------------------
   Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleChatState.js'
import mutations from './moduleChatMutations.js'
import actions from './moduleChatActions.js'
import getters from './moduleChatGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}