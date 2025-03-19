import { all } from 'redux-saga/effects';
import Auth from './Auth';
import { watchFetchData } from './UsersData';

export default function* rootSaga(getState) {
  yield all([Auth(), watchFetchData()]);
}
