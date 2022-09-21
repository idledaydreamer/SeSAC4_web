import React, { Component } from 'react';
import PropTypes from 'prop-types';




class ClassComponent extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <h1>ClassComponent</h1>
                <h5>name : {this.props.name}</h5>
                <h5>location : {this.props.location}</h5>
            </div>
        );
    }

    static propTypes = {
        name: PropTypes.string
    }
}


// function ClassComponent(props) {
//     return (
//         <div>
//             {props.children}
//             <h2>ClassComponent - function</h2>
//             <h5>name : {props.name}</h5>
//             <h5>location : {props.location}</h5>
//         </div>
//     )
// }




// //  props 기본값 -> 부모요소가 props 미지정시 사용
// ClassComponent.defaultProps = {
//     name: '기본이름',
//     location: '기본위치'
// }

// // props 타입지정 -> 부모에서 전달받은 props값 타입검사
// ClassComponent.propTypes = {
//     name: PropTypes.string

// }

export default ClassComponent;