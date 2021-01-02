import { put, takeLatest, select, call } from 'redux-saga/effects';
import { __DEV__ } from '../utils';
import { DATA_ACTIONS, UI_ACTIONS } from './actions';

// *************** SAGAS **************************************************
function* initAsync() {
  yield put(UI_ACTIONS.startLoading());
  try {
    const currentUser = yield select((state: any) => state.data.currentUser);
    const res = yield call(fetch, `https://dkttwitter.herokuapp.com/timeline?user=${currentUser}`);
    if (res.ok) {
      const data = yield res.json();

      yield put(DATA_ACTIONS.updateTimeline(data));
    }
  } catch (e) {
    __DEV__ && console.error(e);
  }
  yield put(UI_ACTIONS.stopLoading());
}

function* changeTimelineAsync({ currentUser }: any) {
  yield put(UI_ACTIONS.startLoading());
  try {
    const res = yield call(fetch, `https://dkttwitter.herokuapp.com/timeline?user=${currentUser}`);
    if (res.ok) {
      const data = yield res.json();
      yield put(DATA_ACTIONS.updateCurrentUser(currentUser));
      yield put(DATA_ACTIONS.updateTimeline(data));
    }
  } catch (e) {
    __DEV__ && console.error(e);
  }
  yield put(UI_ACTIONS.stopLoading());
}

// *************** WATCHERS **************************************************
export default function* watchSagas() {
  yield takeLatest(DATA_ACTIONS.initAsync().type, initAsync);
  yield takeLatest(DATA_ACTIONS.changeTimelineAsync().type, changeTimelineAsync);
}
