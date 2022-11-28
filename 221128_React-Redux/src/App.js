import './App.css';
// import { useState } from 'react';
import { createStore } from 'redux'; //*
import { Provider, useSelector, useDispatch } from 'react-redux'; //?


//* Redux 적용 */
// useState 사용 및 props 전달 부분 모두 삭제하기

//? React-Redux */

//? Provider
// • react - store 연동 컴포넌트

//? useSelector
// • 리덕스 store의 상태 값을 조회하기 위한 hook 함수
// • 인자로 함수를 넘겨줘야 함
// • 그 함수는 state를 매개변수로 받을 수 있고, return 값은 원하는 state 변수 값 설정

//? useDispatch
// • Action을 발생시키는 dispatch 함수를 실행하는 hook 함수
// • 인자로 원하는 Action 객체를 넘겨줘야 함.



function reducer(state, action) {
    // state : 현재 상태의 state -> 아직 바뀌기 전
    // action : dispatch를 실행할 때 넣었던 객체
    if (action.type === 'INCREASE') {
        return { number: state.number + 1, isData: state.isData };
    } else if (action.type === 'DECREASE') {
        return { number: state.number - 1 }
    }
    return { number: 1 };
}

const store = createStore(reducer);
function App() {
    return (
        <div id="app">
            <Provider store={store}>
                {/* <h1>number : {number}</h1>
            <Box1 number={number} onIncrease={() => { setNumber(number + 1) }} onDecrease={() => { setNumber(number - 1) }} /> */}
                <h1>redux 적용</h1>
                <h1>number : { }</h1>
                <Box1 />
            </Provider>
        </div>
    );
}

const Box1 = (props) => {
    console.log('Box1');
    const number = useSelector((state) => state.number); // 일반 js에서의 getState 역할
    return (
        <div>
            {/* <h2>Box1 컴포넌트 number : {props.number}</h2>
            <Box2 number={props.number} onIncrease={props.onIncrease} onDecrease={props.onDecrease} /> */}
            <h2>Box1 컴포넌트 number : {number} </h2>
            <Box2 />
        </div>
    )
}

const Box2 = () => {
    console.log('Box2');
    return (
        <div>
            <h3>Box2 컴포넌트 number : </h3>
            <Box3 />
        </div>
    )
}
const Box3 = () => {
    console.log('Box3');
    // const [number, setNumber] = useState(0);
    const number = useSelector(state => state.number);
    const dispatch = useDispatch();
    return (
        <div>
            <h4>Box3 컴포넌트 number : {number}</h4>
            {/* <input type="button" value="+" onClick={() => { props.onIncrease() }} />
            <input type="button" value="-" onClick={() => { props.onDecrease() }} /> */}
            <button onClick={() => { dispatch({ type: 'INCREASE' }) }}>+1</button>
            <button onClick={() => { dispatch({ type: 'DECREASE' }) }}>-1</button>
        </div>
    )
}

export default App;