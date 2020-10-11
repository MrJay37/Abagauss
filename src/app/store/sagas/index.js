import { all, fork } from "redux-saga/effects";
import LoginSaga from './auth'

export default function* rootSaga() {
  yield all([...Object.values(LoginSaga)].map(fork));
}
