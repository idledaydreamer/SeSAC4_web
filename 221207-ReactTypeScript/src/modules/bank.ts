///* ducks 패턴 */

//액션 타입
const DEPOSIT = 'bank/DEPOSIT' as const;
const WITHDRAW = 'bank/WITHDRAW' as const;
const RESET = 'bank/RESET' as const;

//액션 생성 함수
export const deposit = (cash: number) => ({ type: DEPOSIT, payload: cash });
export const withdraw = (cash: number) => ({ type: WITHDRAW, payload: cash });
export const reset = () => ({ type: RESET });

//초기상태
type BankState = {
    balance: number;
};
const initialState: BankState = {
    balance: 0
};

//액션에 대한 타입
type BankAction = | ReturnType<typeof deposit> | ReturnType<typeof withdraw> | ReturnType<typeof reset>;

//리듀서
function bankReducer(
    state: BankState = initialState,
    action: BankAction)
    : BankState {
    switch (action.type) {
        case DEPOSIT:
            return { balance: state.balance + action.payload };
        case WITHDRAW:
            return { balance: state.balance - action.payload };
        case RESET:
            return { balance: initialState.balance };
        default:
            return state;
    }
}

export default bankReducer;