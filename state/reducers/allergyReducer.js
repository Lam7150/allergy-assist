import actionTypes from "../actions";

const initialState = {
    // Each allergen contains the names of the corresponding profiles affected
    "Dairy": [],
    "Egg": [],
    "Wheat": [],
    "Shellfish": [],
    "Soy": [],
    "Peanuts": [],
    "Melons": [],
    "Vegetarian": [],
    "Vegan": [],
    "Kosher": [],
    "Pescatarian": [],
}

/** Payload looks like this:
    ADD_PROFILE: [<name>, ...allergens] // yes this is bad i know lol
    REMOVE_PROFILE: name
*/
const allergyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PROFILE: {
            let newProfiles = {};
            let profile = action.payload[0];
            for (let i = 1; i < action.payload.length; i++) {
                newProfiles[action.payload[i]] = [profile].concat(state[action.payload[i]]);
            }
            return { ...state, ...newProfiles };
        }
        case actionTypes.REMOVE_PROFILE: {
            let newState = { ...state };
            let profile = action.payload;
            for (let key of Object.keys(state)) {
                const profileIndex = state[key].indexOf(profile);
                if (profileIndex > -1)
                    newState[key].splice(profileIndex, 1);
            }
            console.log(newState);
            return newState;
        }
        default:
            return state;
    }
}

export default allergyReducer;