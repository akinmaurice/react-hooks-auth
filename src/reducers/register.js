import {
 REGISTER_SUCCESS
} from '../constants/types';


export function registerSuccess(state = false, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return action.registerSuccess;
    default:
      return state;
  }
}

