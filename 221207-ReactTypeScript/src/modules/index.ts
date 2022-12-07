import { combineReducers } from "redux";
import bankReducer from "./bank";

const rootReducer = combineReducers({
    bankReducer
});

export default rootReducer;

//리덕스에서 관리하는 상태에 대한 타입
export type RootState = ReturnType<typeof rootReducer>;