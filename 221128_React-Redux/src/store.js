import { configureStore } from "@reduxjs/toolkit"; //? store 생성 함수
import { composeWithDevTools } from "redux-devtools-extension"; //? 리덕스 개발자 도구


//? store 생성 
// 프로젝트 당 하나라 상수const로 선언
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

//~ CombineReducers
// 각 reducer 에서 관리되는 state가 key 로 들어감
// 하나의 state 저장

import rootReducer from "./store/rootReducer";
const store = configureStore({ reducer: rootReducer }, composeWithDevTools);

// const initialState = { number: 0 }
// function reducer(state = initialState, action) {
//     switch (action.type) {
//         case 'INCREASE':
//             return { number: state.number + 1 }
//         case 'DECREASE':
//             return { number: state.number - 1 }
//         default:
//             return state;
//     }
// }
// const store = configureStore({ reducer: reducer }, composeWithDevTools);


export default store;

