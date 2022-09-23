import React, { useState } from 'react';




// const EventFunction = () => {

//     const [username, setUsername] = useState("");
//     const [message, setMessage] = useState("");

//     const onChangeUsername = (e) => setUsername(e.target.value);
//     const onChangeMessage = (e) => setMessage(e.target.value);
//     const onClick = () => {
//         alert(username + ": " + message);
//         setUsername("");
//         setMessage("");
//     };
//     const onKeyPress = (e) => {
//         if (e.key === "Enter") {
//             onClick();
//         }
//     };

//     const aClick = (e) => {
//         e.preventDefault(); //윈도우 기본동작 방지
//         console.log('aClick');
//         console.log(e);
//     }

//     const printConsole = () => {
//         console.log('printConsole')
//         console.log(this);
//     }
//     const printConsole2 = () => {
//         console.log('printConsole2')
//         console.log(this);
//     }


//     return (
//         <div>
//             <h1>EventFunction</h1>

//             <input
//                 type="text"
//                 name="username"
//                 placeholder="사용자 이름"
//                 value={username}
//                 onChange={onChangeUsername}
//             />

//             <input
//                 type="text"
//                 name="message"
//                 placeholder="이곳에 입력해보세요."
//                 value={message}
//                 onChange={onChangeMessage}
//                 onKeyPress={onKeyPress}
//             />

//             <button onClick={onClick}>클릭</button>



//             <p /><a href="#" onClick={aClick}>a태그</a>
//             <button onClick={(() => { printConsole('2') })}>프린트콘솔1</button>
//             <button onClick={printConsole2}>프린트콘솔2</button>


//         </div>
//     );
// }




export default EventFunction;