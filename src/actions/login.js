import {
  LOGIN_SUCCESS
} from '../constants/types';


import { isLoading, isError, errorMessage } from './utils';


import * as Api from '../api';


export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    loginSuccess: user,
  };
}


export function authenticated(bool) {
  return {
    type: 'AUTHENTICATED',
    authenticated: bool,
  };
}



export function loginUser(arg) {
  return async(dispatch) => {
    dispatch(isLoading(true));
    dispatch(isError(false));
    try {
      const response = await Api.login(arg)
      const { data: { token, user } } = response;
      localStorage.setItem('token',token);
      dispatch(loginSuccess(user));
      dispatch(authenticated(true));
      dispatch(isError(false));
      dispatch(isLoading(false));
    } catch(e) {
      dispatch(isError(true));
      dispatch(errorMessage(e.message));
      dispatch(isLoading(false));
    }
  };
}


export function logoutUser() {
  localStorage.clear();
  return (dispatch) => {
    dispatch(isError(false));
    dispatch(errorMessage(null));
    dispatch(loginSuccess({}));
    dispatch(authenticated(false));
  };
}
