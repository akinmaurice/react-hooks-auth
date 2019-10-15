import axios from 'axios';
import urls from '../constants/url';

export const login = async (arg) => {
  const response = await axios.post(urls.login, arg);
  const{ data }= response;
  const { status, message, token, userDetails } = data;
  if(status !== 200) {
    throw new Error(message);
  }
  const result = {
     data :{
      token,
      user: userDetails
    }
  }
  return result;
}


export const register = async (arg) => {
  const body = {
    ...arg,
    name: 'null',
    passwordConfirm: arg.confirm_password
  }
  const response = await axios.post(urls.register, body)
  const { data } = response;
  const { status, message } = data;
  if(status !== 200) {
    throw new Error(message);
  }
  return data;
}