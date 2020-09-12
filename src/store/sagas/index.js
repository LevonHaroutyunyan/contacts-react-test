import { all, fork } from 'redux-saga/effects';
import * as profile from './profile';
import * as contacts from './contacts';

const combinedSagas = {
  ...profile,
  ...contacts
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
