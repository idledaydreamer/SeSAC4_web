import React, { Component, createRef } from 'react';
import './Main.css';

class Ref extends Component {

    event1() {
        let input = document.getElementById(('input1'));
        console.log(input.value);
    }
    event2 = () => {
        console.log(this.input2.value);
    }
    input3 = createRef();
    event3 = () => {
        console.log(this.input3.current.value);
    }


    render() {
        return (<>
            <h1>React에서 요소를 호출해보자!</h1>
            <div>
                <h3>id지정</h3>
                <input id='input1' />
                <button onClick={this.event1}>버튼1</button>
            </div>
            <div>
                <h3>콜백함수</h3>
                <input id='input2' ref={(ref) => { this.input2 = ref }} />
                <button onClick={this.event2}>버튼2</button>
            </div>
            <div>
                <h3>createRef</h3>
                <input ref={this.input3} />
                <button onClick={this.event3}>버튼3</button>
            </div>
        </>)
    }
}

export default Ref;