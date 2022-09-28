import React, { Component, createRef } from "react";
import './Main.css';

class ScrollBox extends Component {

    // clientHeight 현재 보이는 길이
    // scrollHeight 스크롤 전체 길이

    area = createRef();
    scrollUp = () => {
        this.area.current.scrollTop = 0;
    }
    scrollDown = () => {
        const { scrollHeight, clientHeight } = this.area.current;
        this.area.current.scrollTop = scrollHeight - clientHeight;
        console.log('scrollHeight', scrollHeight);
        console.log('clientHeight', clientHeight);
        console.log('scrollHeight - clientHeight:', scrollHeight - clientHeight);
        console.log('scrollTop', this.area.current.scrollTop);
    }


    scrollChoice = (type) => {
        const { scrollHeight } = this.area.current;

        if (type === 1) {
            this.area.current.scrollTop = scrollHeight / 4;
        } else if (type === 2) {
            this.area.current.scrollTop = scrollHeight / 2;
        } else {
            this.area.current.scrollTop = scrollHeight * 3 / 4;
        }
    }



    render() {
        return (
            <div>
                <div className='area' ref={this.area}>
                    <div className='box' />
                </div>
                <div className="button1">
                    <button type='text' onClick={this.scrollUp}>맨 위로</button>
                    <button type='text' onClick={this.scrollDown}>맨 밑으로</button>
                </div>

                <div className="button2">
                    <button type='text' onClick={() => { this.scrollChoice(1) }} > 상</button>
                    <button type='text' onClick={() => { this.scrollChoice(2) }}>중</button>
                    <button type='text' onClick={() => { this.scrollChoice(3) }} >하</button>
                </div>
            </div>
        )
    }
}

export default ScrollBox;