import { combineReducers } from 'redux';
import {isError, isLoading, errorMessage } from './utils';
import { loginSuccess, authenticated } from './login';
import { registerSuccess } from './register';

export default combineReducers({
  isError,
  isLoading,
  errorMessage,
  loginSuccess,
  authenticated,
  registerSuccess
});

