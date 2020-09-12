import { CONTACTS } from '../actionTypes';
import { initialState } from '.';

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (true) {
    case [CONTACTS.FIND.LOAD].includes(type):
      return { ...state, loaded: false };
    case [CONTACTS.FIND.FAIL].includes(type):
      return { ...state, failed: true, loaded: true };
    case [CONTACTS.FIND.SUCCES].includes(type):
      return { ...state, data: payload, loaded: true };
    case [CONTACTS.FIND.RESET].includes(type):
      return initialState;
    // create
    default:
      return state;
  }
};
