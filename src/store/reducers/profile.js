import { PROFILE } from '../actionTypes';
import { initialState } from '.';

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (true) {
    case [PROFILE.FIND.LOAD].includes(type):
      return { ...state, loaded: false };
    case [PROFILE.FIND.FAIL].includes(type):
      return { ...state, failed: true, loaded: true };
    case [PROFILE.FIND.SUCCES].includes(type):
      return { ...state, data: payload, loaded: true };
    case [PROFILE.FIND.RESET].includes(type):
      return initialState;
    // create
    default:
      return state;
  }
};
