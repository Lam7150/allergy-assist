import actionTypes from "./index";

export const increment = (amount) => ({ type: actionTypes.INCREMENT, amount }); // you can add data to actions, but keep it minimal
export const decrement = () => ({ type: actionTypes.DECREMENT });