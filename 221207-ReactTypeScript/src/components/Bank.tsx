// Presentational Component
import React, { ReactElement, ReactHTMLElement, ReactNode } from "react";

//props 타입
type BankProps = {
    balance: number;
    onDeposit: (cash: number) => void;
    onWithdraw: (cash: number) => void;
    onReset: () => void;
};

export default function Bank({
    balance,
    onDeposit,
    onWithdraw,
    onReset,
}: BankProps) {

    // Input창 처리
    const [cash, setCash] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCash({
            ...cash,
            [name]: value
        });
    };

    return (
        < div style={{ textAlign: 'center' }} >
            <h1>코딩온 은행</h1>
            <h3>잔액 : {balance}원</h3>
            <input type="number" name='cash' id="cash" onChange={onChange} value={cash} />
            <button onClick={() => (onDeposit(document.getElementById('cash').value))}>입금</button>
            <button onClick={() => (onWithdraw(document.getElementById('cash').value))}>출금</button>
            <button onClick={() => (onReset())}>초기화</button>
        </div >
    );
}



import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw, reset } from '../modules/bank';


//*  react redux hooks : Component에 Redux 적용하기

// function Bank() {
//     const balance = useSelector(state => state.balance);
//     const dispatch = useDispatch();

//     return (
//         <div className="Bank">
//             <Balance balance={balance}
//                 onDeposit={(cash) => dispatch(deposit(cash))}
//                 onWithdraw={(cash) => dispatch(withdraw(cash))}
//                 onReset={() => dispatch(reset())}>
//             </Balance>
//         </div >
//     );
// }


// function Balance({ balance, onDeposit, onWithdraw, onReset }) {

    // Input창 처리
//     const [cash, setCash] = useState('');
//     const onChange = (e) => { setCash(e.target.value); }
//     const onClick = () => { setCash(''); }

//     return (
//         <div style={{ textAlign: 'center' }} >
//             <h1>코딩온 은행</h1>
//             <h3>잔액 : {balance}원</h3>
//             <input type="number" name='cash' id="cash" onChange={onChange} value={cash} onClick={onClick} />
//             <button onClick={() => (onDeposit(document.getElementById('cash').value))}>입금</button>
//             <button onClick={() => (onWithdraw(document.getElementById('cash').value))}>출금</button>
//             <button onClick={() => (onReset())}>초기화</button>
//         </div>
//     );
// }


// export default Bank;
