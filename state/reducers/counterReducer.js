import actionTypes from "../actions";

const initialState = 0

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + action.amount;
        case actionTypes.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;