import { combineReducers } from 'redux';
import {isError, isLoading, errorMessage } from './utils';
import { loginSuccess } from './login';

export default combineReducers({
  isError,
  isLoading,
  errorMessage,
  loginSuccess
});

