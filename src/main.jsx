import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer' //On va créer notre reducer
import rootSaga from './saga/root_saga'
import createSagaMiddleware from 'redux-saga' //le middleware  saga @redux-saga/core ou tout simplement redux-saga


const sagaMiddleware = createSagaMiddleware()

const store = createStore( //Comme on l'a dit dans le cours, createstore prend 3 paramètres (le reducer, l'état initial(facultatif), le(s) middleware(s) (facultatif))
  rootReducer,
  undefined,
  applyMiddleware(sagaMiddleware))

//on execute notre middleware
sagaMiddleware.run(rootSaga)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


export default store
