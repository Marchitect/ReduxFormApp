import { all, call, put, takeEvery } from "redux-saga/effects"
import {
  LOAD_LIST,
  RENDER_LIST,
  CALL_ERROR
} from "../../constants/action-types"
import "core-js/stable"
import "regenerator-runtime/runtime"

export function* fetchToDoList() {
  try {
    const endpoint =
      "https://gist.githubusercontent.com/Marchitect/58f8b81c32bfdf09c5fb34d689f90b95/raw/e57e7a4d9fc961fccaf5b30c803624f3e838df7d/items-list.json"
    const response = yield call(fetch, endpoint)
    if (!response.error) {
      const data = yield response.json()
      yield put({ type: RENDER_LIST, content: data })
    } else {
      yield put({ type: error, payload: response })
    }
  } catch (e) {
    yield put({ type: CALL_ERROR, error: e })
  }
}

export function* loadList() {
  // pass action object
  yield takeEvery(LOAD_LIST, fetchToDoList)
}

export default function* rootSaga() {
  yield all([loadList()])
}
