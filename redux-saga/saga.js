 import {take,call,all} from "redux-saga/effects"

import { watchAddToTaskAsync } from './main';

export default function* RootSaga(){
    yield all([watchAddToTaskAsync()])
}