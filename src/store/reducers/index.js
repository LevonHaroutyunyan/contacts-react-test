import { LOGOUT } from 'store/actionTypes';
import { combineReducers } from 'redux';
// reducers
import profile from './profile';
import contacts from './contacts';

//define initial states to use in reducers
export const initialState = { data: null, loaded: false, failed: false };

export default (state, action) => {
  if (action.type === LOGOUT.FAIL || action.type === LOGOUT.SUCCES) {
    // reset store data on logout action
    Object.keys(state).map((key) => {
      Object.assign(state[key], initialState);
    });
  }
  return RootReducer(state, action);
};

const RootReducer = combineReducers({
  profile,
  contacts
});
