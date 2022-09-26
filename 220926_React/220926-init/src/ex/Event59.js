import React, { useState } from 'react';
import '../Main.css';

function Event59() {
    const [list, setList] = useState([]);
    const [result, setResult] = useState([]);

    const onKeyPress1 = (e) => {
        if (e.key === "Enter") {
            write();
        }
    };


    function write() {
        let form1 = document.getElementById('form_write');
        let newList1 = {
            title: form1.title.value,
            name: form1.name.value
        };

        setList([...list, newList1]);  // 상태 업데이트
        form1.reset();
    }
    function search() {
        let form2 = document.getElementById('form_search');
        //작성자 기준으로
        // let newList = list.filter((result) => { 
        //     return list['name'].includes(form.value.value);
        // });

        // 검색타입 기준으로
        let type = form2.type.value;     // select태그에서 선택한 타입
        let search = form2.search.value; // input태그에 입력한 검색어
        let newList2 = list.filter((result) => {
            if (result[type].includes(search)) return result;
        });

        setResult(newList2);
        form2.reset();
    }

    return (
        <div>
            <h1>실습59</h1>

            <form id='form_write'>
                <label>작성자 : <input name="name" placeholder='작성자' ></input></label>
                <label>제목 :  <input name="title" placeholder='제목' onKeyPress={onKeyPress1}></input></label>
                <button type='button' onClick={write}>작성</button>
            </form>

            <form id='form_search'>
                <select name='type'>
                    <option value='name'>작성자</option>
                    <option value='title'>제목</option>
                </select>
                <input name='search' placeholder='검색어' ></input>
                <button type='button' onClick={search}>검색</button>
            </form>

            <table border={1}>
                <thead>
                    <tr >
                        <th >번호</th><th >제목</th><th >작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value, i) => {
                        return (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>




            {
                result.length !== 0 ?
                    (
                        <div >
                            <h4>검색 결과</h4>
                            <table border={1}>
                                <thead>
                                    <tr >
                                        <th >번호</th><th >제목</th><th >작성자</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result.map((value, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}</td>
                                                <td>{value.title}</td>
                                                <td>{value.name}</td>
                                            </tr>)
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <h5>검색 결과가 없습니다.</h5>
                    )
            }
        </div >
    )
}

export default Event59;