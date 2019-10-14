import {
  REGISTER_SUCCESS
} from '../constants/types';


import { isLoading, isError, errorMessage } from './utils';


import * as Api from '../api';


export function registerSuccess(bool) {
  return {
    type: REGISTER_SUCCESS,
    registerSuccess: bool
  };
}




export function registerUser(arg) {
  return async(dispatch) => {
    dispatch(isLoading(true));
    dispatch(isError(false));
    try {
      const response = await Api.register(arg)
      const { data } = response;
      dispatch(registerSuccess(true));
      dispatch(isError(false));
      dispatch(isLoading(false));
    } catch(e) {
      dispatch(isError(true));
      dispatch(errorMessage(e.message));
      dispatch(isLoading(false));
    }
  };
}


