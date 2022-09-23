import React, { Component } from 'react';


class StateClass extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: "SeSAC",
    //         list: ['s','e','s','a','c']
    //     };
    // }

    state = {
        name: "SeSAC",
        list: ['s', 'e', 's', 'a', 'c'],
        cnt: 0
    }

    render() {
        return (
            <div>
                <h1>StateClass</h1>
                <div>
                    {this.state.name} StateClass {this.state.cnt}</div>


                <button onClick={() => {
                    // this.setState({ name: "청년취업사관학교", cnt: this.state.cnt + 1 })
                    // this.setState({ name: "영등포캠퍼스", cnt: this.state.cnt + 1 })

                    // setState 비동기처리 -> 체이닝실행
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                    this.setState(prevState => {
                        return { cnt: prevState.cnt + 1 }
                    });
                }}>클릭1</button>

                <br></br>
                <button onClick={() => { this.setState({ list: ['c', 'l', 'i'] }) }}>클릭2</button>


                <ul>
                    {this.state.list.map((txt) => {
                        return <li>{txt}</li>
                    })}
                </ul>
            </div>)
    }
}


export default StateClass;