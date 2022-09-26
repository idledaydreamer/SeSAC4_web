import React, { useState } from 'react';

function MapFunction() {

    const [list, setList] = useState(['test', 'testing', 'apple', 'sesac', 'animal']);

    // function isMap() {
    //     // map() 함수 - 값, 인덱스, 현재배열
    //     list.map((value, index, arr) => {
    //         console.log('index: ', index);
    //         console.log('value: ', value);
    //         console.log('arr: ', arr);
    //         return index + value;
    //     });
    // }



    function addElement() {
        setList([...list, 's']);    // 전개연산자로 리스트 안에 값 넣기
        // list.push('s');
        // setList(list); // state이기 때문에 push 반영X


        let newList = [];
        for (let i = 0; i < list.length; i++) {
            console.log('i: ', i);
            console.log('list[i]: ', list[i]);
            newList.push(i + list[i]);
        }

        newList = list.map((value, i) => {
            console.log('i: ', i);
            console.log('value: ', value);
            return i + value;
        })
    }



    function substrElement() {
        list.splice(list.indexOf('s'), 1);
        setList([...list]);
    }


    function filterCheck() {
        let lists = ['test', 'testing', 'apple', 'sesac', 'animal'];

        let newList = [];
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].length > 4)
                newList.push(lists[i]);
        }

        let result = lists.filter((value) => {
            return value.length > 4;
        })
        console.log('result: ', result);
    }


    return (
        <div>
            {list}
            <h1>MAP</h1>
            <ul>
                {list.map((name, i) => {   // map(): (값, 인덱스, 현재배열)
                    return <li key={'li_' + i}> {i}: {name} </li> // 인덱스키 비추천
                })}
            </ul>

            <h1>FILTER</h1>
            <ul>
                {list.filter((name) => {
                    return name.includes('a');  // includes('a'): a 포함 문자열 찾아서 나열
                })}
            </ul>


            <button onClick={addElement}>추가</button>
            <button onClick={substrElement}>삭제</button>
            <button onClick={filterCheck}>검색</button>

        </div>
    )
}

export default MapFunction;
