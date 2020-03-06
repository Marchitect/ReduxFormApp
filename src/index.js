import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./redux/reducers"
import rootSaga from "./redux/sagas"
import { AppContainer } from "./components/AppContainer"
import { loadList } from "./redux/actions"
// import configureStore from './redux/store'

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const composeEnhancers =
  typeof window === "object" &&
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
store.dispatch(loadList())

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("container")
)
