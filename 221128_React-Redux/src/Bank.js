import { useSelector, useDispatch, connect } from 'react-redux';
import { deposit, withdraw } from '../src/store/bankReducer';


//!  Component에 Redux 적용하기
// const mapStateToProps = (state) => {
//     return {
//         balance: state.balance
//     };
// };
// const mapDispatchToProps = (dispatch) => ({
//     onDeposit: (cash) => dispatch(deposit(cash)),
//     onWithdraw: (cash) => dispatch(withdraw(cash))
// });


function Bank() {
    const balance = useSelector(state => state.balance)
    const cash = document.getElementById('cash');

    const Button = () => {
        const dispatch = useDispatch();
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input type="number" id='cash' />
                <button type="button" value="+" onClick={() => dispatch(deposit(cash))}>입금</button>
                <button type="button" value="-" onClick={() => dispatch(withdraw(cash))}>출금</button>
            </div>
        )
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>코딩온 은행</h1>
            <h3>잔액 : {balance}원</h3>
            <Button />
        </div>
    );
}


export default connect()(Bank);

// export default Bank;