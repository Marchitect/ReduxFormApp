import React from "react"
import { render } from 'react-dom'
import { Provider } from "react-redux"
import { createStore } from 'redux'
import rootReducer from './redux/reducers'

import { AppContainer } from "./components/AppContainer"
import configureStore from './redux/store';

import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// const store = configureStore()

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("container")
)
