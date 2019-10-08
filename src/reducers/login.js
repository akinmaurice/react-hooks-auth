import {
  LOGIN_SUCCESS
} from '../constants/types';


export function loginSuccess(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.loginSuccess;
    default:
      return state;
  }
}


export function authenticated(state = false, action) {
  switch (action.type) {
    case 'AUTHENTICATED':
      return action.authenticated;
    default:
      return state;
  }
}