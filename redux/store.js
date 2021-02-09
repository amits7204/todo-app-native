import {createStore, combineReducers, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga"
import Reducer from './actionReducer'
import ReduxSaga from '../redux-saga/saga'

const RootReducer = combineReducers({Reducer})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(ReduxSaga)
console.log("saga: S", store.getState())

export default store