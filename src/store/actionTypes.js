// generate action types
const generateActionTypes = (action) => ({
    WATCH: `${action}__WATCH`,
    LOAD: `${action}__LOAD`,
    FAIL: `${action}__FAIL`,
    SUCCES: `${action}__SUCCESS`,
    RESET: `${action}__RESET`,
  });

export const LOGIN = generateActionTypes('LOGIN');
export const LOGOUT = generateActionTypes('LOGOUT');

// PROFILE
export const PROFILE = {
  FIND: generateActionTypes('FIND_PROFILE'),
};

// CONTACTS
export const CONTACTS = {
  FIND: generateActionTypes('FIND_CONTACTS'),
};