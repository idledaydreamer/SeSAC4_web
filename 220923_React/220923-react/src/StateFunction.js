import React, { useState } from 'react';

function StateFunction() {

    // msg는 초기값(name, list...) // setMsg는 msg변경함수()


    const [msg, setMsg] = useState("");
    // this.state { msg: "" }

    function changeMsg() {
        setMsg("메세지지롱")
        // setState({msg: "메세지바꿧지롱"})
    }

    // 렌더링시 실행되기에, 함수 이름으로만 전달!
    return (
        <div>
            <h1>StateFunction</h1>
            <br></br>
            <p>{msg}</p>
            <button onClick={changeMsg}>클릭</button>
        </div>
    )
}

export default StateFunction;