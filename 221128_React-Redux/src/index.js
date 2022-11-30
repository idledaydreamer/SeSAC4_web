import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'; //? react - store 연동 컴포넌트
import store from './store';
// import { configureStore } from "@reduxjs/toolkit"; //~ store 생성 함수
// import { composeWithDevTools } from "redux-devtools-extension"; //~ 리덕스 개발자 도구
// import rootReducer from "./store/rootReducer";  //& CombineReducers
// const store = configureStore(rootReducer, composeWithDevTools); 



//? Provider
// • react - store 연동 컴포넌트
//? useSelector
// • 리덕스 store의 상태 값을 조회하기 위한 hook 함수
// • 인자로 함수를 넘겨줘야 함
// • 그 함수는 state를 매개변수로 받을 수 있고, return 값은 원하는 state 변수 값 설정
//? useDispatch
// • Action을 발생시키는 dispatch 함수를 실행하는 hook 함수
// • 인자로 원하는 Action 객체를 넘겨줘야 함.

//~ configureStore
// 프로젝트 당 하나라 상수const로 선언
// composeWithDevTools 를 사용하여 리덕스 개발자 도구 활성화

//& CombineReducers
// 각 reducer 에서 관리되는 state가 key 로 들어감
// 하나의 state 저장


import App from './App';
import AppR from './AppR';
import Bank from './Bank';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>       {/* props로 store 전달 */}
      {/* <App />
      <AppR /> */}
      <br />
      <Bank />
    </Provider>
  </>
);

