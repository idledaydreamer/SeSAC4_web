import React, { Component } from 'react';

class EventClass extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     username: "",
        //     message: ""
        // }

        this.printConsole = this.printConsole.bind(this);
        this.printConsole2 = this.printConsole2.bind(this);

    }
    state = {
        username: "",
        message: ""
    }


    printConsole() {
        console.log('printConsole')
        console.log(this);
    }
    printConsole2 = () => {
        console.log('printConsole2')
        console.log(this);
    }



    eventChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    eventClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: ""
        });
    }

    eventKeyPress = (e) => {
        if (e.key === "Enter") {
            this.eventClick();
        }
    }

    aClick = (e) => {
        e.preventDefault(); //윈도우 기본동작 방지
        console.log('aClick');
        console.log(e);
    }


    // this 붙여주기!
    render() {
        return (
            <div>
                <h1>EventClass</h1>



                <input
                    type="text"
                    name="username"
                    placeholder="사용자 이름"
                    value={this.state.username}
                    onChange={this.eventChange}
                />

                <input
                    type="text"
                    name="message"
                    placeholder="이곳에 입력해보세요."
                    value={this.state.message}
                    onChange={this.eventChange}
                    onKeyPress={this.eventKeyPress}
                />

                <button onClick={this.eventClick}>클릭</button>

                <p /><a href="#" onClick={this.aClick}>a태그</a>
                <button onClick={(() => { this.printConsole('2') })}>프린트콘솔1</button>
                <button onClick={this.printConsole2}>프린트콘솔2</button>


            </div >
        );
    }
}

export default EventClass;