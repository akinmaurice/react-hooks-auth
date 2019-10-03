import {
  LOGIN_SUCCESS
} from '../constants/types';


import { isLoading, isError } from './utils';


export function loginSuccess(bool) {
  return {
    type: LOGIN_SUCCESS,
    loginSuccess: bool,
  };
}




export function loginUser(arg) {
  return async(dispatch) => {
    dispatch(isLoading(true));
    dispatch(isError(false));
    try {
      console.log(arg);
      dispatch(loginSuccess(true));
      dispatch(isError(false));
      dispatch(isLoading(false));
    } catch(e) {
      dispatch(isError(true));
      dispatch(isLoading(false));
    }
  };
}
