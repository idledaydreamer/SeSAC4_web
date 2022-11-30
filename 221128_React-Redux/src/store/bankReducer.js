///* ducks 패턴 */

// Action type ( 액션 타입 ) : 스트링, 모듈명/액션타입으로 표시
export const DEPOSIT = 'bank/DEPOSIT';
export const WITHDRAW = 'bank/WITHDRAW';
export const RESET = 'bank/RESET';

// Action Creator Function ( 액션 생성 함수 )
export const deposit = cash => ({ type: DEPOSIT, payload: cash });
export const withdraw = cash => ({ type: WITHDRAW, payload: cash });
export const reset = () => ({ type: RESET });

// init State ( 초기 상태 )
const initialState = 0;


// Reducer function ( 리듀서 함수 )
export const bankReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return state + parseInt(action.payload)
                ;
        case WITHDRAW:
            return state - parseInt(action.payload);
        case RESET:
            return initialState;
        default:
            return state;
    }
}