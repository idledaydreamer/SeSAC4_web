// Action type ( 액션 타입 )
const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

// Action Creator Function ( 액션 생성 함수 )
export const deposit = cash => ({ type: DEPOSIT, cash });
export const withdraw = cash => ({ type: WITHDRAW, cash });

// init State ( 초기 상태 )


// Reducer function ( 리듀서 함수 )
export default function bankReducer(state = 0, action) {
    switch (action.type) {
        case DEPOSIT:
            return state + parseInt(action.cash)
        case WITHDRAW:
            return state - parseInt(action.cash)
        default:
            return state
    }
}