import { takeEvery, takeLatest, delay, put } from "redux-saga/effects";

// Increment

function* incrementAsync() {
  yield delay(2000);
  yield put({ type: "INCREMENT_ASYNC" });
}

export function* watchIncrement() {
  yield takeEvery("INCREMENT", incrementAsync);
}

// Decrement

function* decrementAsync() {
  yield delay(2000);
  yield put({ type: "DECREMENT_ASYNC" });
}

export function* watchDecrement() {
  yield takeEvery("DECREMENT", decrementAsync);
}

// Reset

function* resetAsync() {
  yield delay(2000);
  yield put({ type: "RESET_ASYNC" });
}

export function* watchReset() {
  yield takeLatest("RESET", resetAsync);
}
