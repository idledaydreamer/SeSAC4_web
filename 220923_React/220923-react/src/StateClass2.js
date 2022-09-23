import React, { Component } from 'react';

class StateClass2 extends Component {
    state = {
        num: 0
    }

    render() {
        return (
            <div>
                <h1>StateClass2</h1>

                {this.state.num}
                <button onClick={this.setState({ num: this.state.num + 2 })}>+2</button>
                <button onClick={this.setState({ num: this.State.num - 1 })}>-1</button>
            </div>
        )
    }
}


export default StateClass2;