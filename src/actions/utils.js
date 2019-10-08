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

