import {
  IS_ERROR,
  IS_LOADING,
  ERROR_MESSAGE
} from '../constants/types';


export function isError(bool) {
  return {
    type: IS_ERROR,
    isError: bool,
  };
}


export function isLoading(bool) {
  return {
    type: IS_LOADING,
    isLoading: bool,
  };
}


export function errorMessage(error) {
  return {
    type: ERROR_MESSAGE,
    errorMessage: error,
  };
}


export function showError(error) {
  return async(dispatch) => {
    dispatch(isLoading(false));
    dispatch(isError(true));
    dispatch(errorMessage(error));
  }
}


export function clearError() {
  return async(dispatch) => {
    dispatch(isLoading(false));
    dispatch(isError(false));
    dispatch(errorMessage(''));
  }
}