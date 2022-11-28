import { combineReducers } from "redux"; //*
import bankReducer from "./bankReducer";
import counterReducer from "./counterReducer";
import isDataReducer from "./isDataReducer";

//& combineReducers */
// 각 reducer 에서 관리되는 state가 key 로 들어감
// 하나의 state 저장

const rootReducer = combineReducers({
    number: counterReducer,
    isData: isDataReducer,
    balance: bankReducer
})

export default rootReducer;