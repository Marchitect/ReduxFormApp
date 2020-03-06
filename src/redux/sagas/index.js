import { all, call, put, takeEvery } from "redux-saga/effects"
import { LOAD_LIST, RENDER_LIST } from "../../constants/action-types"
import "core-js/stable";
import "regenerator-runtime/runtime";

export function* fetchToDoList() {
  const endpoint =
    "https://gist.githubusercontent.com/brunokrebs/f1cacbacd53be83940e1e85860b6c65b/raw/to-do-items.json"
  const response = yield call(fetch, endpoint)
  const data = yield response.json()
  yield put({ type: RENDER_LIST, renderList: data })
}

export function* loadList() {
  yield takeEvery(LOAD_LIST, fetchToDoList)
}

export default function* rootSaga() {
  yield all([loadList()])
}
