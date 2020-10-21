/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
   Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
	UPDATE_AUTHENTICATED_USER(state, user) {
		localStorage.setItem('userInfo', JSON.stringify(user));
		localStorage.setItem('userRole', 'admin');
	},
}