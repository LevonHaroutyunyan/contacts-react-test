import { takeLatest, put, call } from 'redux-saga/effects';
import services from '../services';
import { PROFILE } from '../actionTypes';
import toast from 'utils/toast';
const { FIND } = PROFILE;

// watchers
export function* findProfileWatcher() {
  yield takeLatest(FIND.WATCH, findProfileWorker);
}

function* findProfileWorker({ payload }) {
  try {
    yield put({ type: FIND.LOAD });
    const response = yield call(services.profile.find, payload);
    yield put({ type: FIND.SUCCES, payload: { rows: response.results } });
  } catch (err) {
    toast.error(err);
    yield put({ type: FIND.FAIL, err });
  }
}