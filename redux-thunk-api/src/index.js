import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { bookShop } from './reducers/reducers'
import { mainSaga } from './sagas'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  bookShop,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mainSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
