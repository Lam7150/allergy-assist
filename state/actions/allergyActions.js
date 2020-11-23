import actionTypes from "./index";

export const add_profile = (profile) => ({ type: actionTypes.ADD_PROFILE, payload: profile });
export const remove_profile = (profile) => ({ type: actionTypes.REMOVE_PROFILE, payload: profile });