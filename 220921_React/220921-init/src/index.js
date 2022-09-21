// Main Program - src
import React from 'react';  // node_modules디렉터리의 react모듈 불러오기
import ReactDOM from 'react-dom/client';  // 가장 외부 요소
// import './index.css';
import App from './App';    // App 컴포넌트 만들어주기 (함수형)
import ClassComponent from './ClassComponent';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  // public-index.html


// ReactDOM.render - 리액트가 화면 출력, App 컴포넌트 불러오기
// StrictMode - 검사용, 개발자도구
root.render(
  <>
    <ClassComponent name={1} location='문래' >props칠드런</ClassComponent>
    {/* <App /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/// reportWebVitals();  - React application 성능측정
