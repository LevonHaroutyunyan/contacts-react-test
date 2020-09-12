import { takeLatest, put, call } from 'redux-saga/effects';
import services from '../services';
import { CONTACTS } from '../actionTypes';
import toast from 'utils/toast';
const { FIND } = CONTACTS;

// watchers
export function* findContactsWatcher() {
  yield takeLatest(FIND.WATCH, findContactsWorker);
}

function* findContactsWorker({ payload }) {
  try {
    yield put({ type: FIND.LOAD });
    const response = yield call(services.contacts.find, payload);
    yield put({ type: FIND.SUCCES, payload: { rows: response.results } });
  } catch (err) {
    toast.error(err);
    yield put({ type: FIND.FAIL, err });
  }
}