import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from 'redux/constants/UsersData';

export const fetchUsersData = () => ({ type: FETCH_DATA_REQUEST });

function* fetchDataSaga() {
  try {
    const response = yield call(
      fetch,
      'https://jsonplaceholder.typicode.com/users'
    );
    const data = yield response.json();
    yield put({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, error: error.message });
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
