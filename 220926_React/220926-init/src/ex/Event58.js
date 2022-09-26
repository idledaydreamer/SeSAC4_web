import React, { useState } from 'react';

function EventEx() {

    const [list, setList] = useState([
        { id: 1, name: '코디', mail: 'codi@gamil.com' },
        { id: 2, name: '윤소희', mail: 'yoonsohee@gamil.com' }
    ]);

    const [nextId, setNextId] = useState(3); //새로운 항목을 추가할 때 사용할 고유id
    const [inputName, setInputName] = useState('');
    const [inputMail, setInputMail] = useState('');

    const onChange1 = (e) => setInputName(e.target.value);
    const onChange2 = (e) => setInputMail(e.target.value);
    const onClick = () => {
        const nextList = list.concat({
            id: nextId,
            name: inputName,
            mail: inputMail
        });
        setNextId(nextId + 1);
        setList(nextList);  // 상태 업데이트
        setInputName('');
        setInputMail('');
    }

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            onClick();
        }
    };

    const onRemove = id => {
        const nextList = list.filter(one => one.id !== id); // 해당 id 삭제
        setList(nextList);  // 상태업데이트
    }

    const event = list.map((one) => <h3 key={one.id} onDoubleClick={() => onRemove(one.id)}> {one.name} : {one.mail}</h3>);


    return (
        <div>
            <h1>실습58</h1>

            <input value={inputName} placeholder={'이름'} onChange={onChange1}></input>
            <input value={inputMail} placeholder={'이메일'} onChange={onChange2} onKeyPress={onKeyPress}></input>
            <button onClick={onClick}>등록</button>

            <div>
                {event}
                {/* {list.map((list) => { return <p key={list.id}> {list.name} : {list.mail}</p> })} */}
            </div>
        </div>
    );
};

export default EventEx;