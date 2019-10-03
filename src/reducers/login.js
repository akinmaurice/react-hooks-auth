import {
  LOGIN_SUCCESS
} from '../constants/types';


export function loginSuccess(state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.loginSuccess;
    default:
      return state;
  }
}

