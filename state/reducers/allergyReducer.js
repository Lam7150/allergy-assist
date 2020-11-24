import actionTypes from "../actions";
import * as data from "../../app/data/profiles.json"
const { shared_profiles } = data

function initializeProfiles() {
    let state = {
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

    shared_profiles.forEach(profile => {
        profile.restrictions.forEach(r => state[r].push(profile.name))
    })

    return state;
}

const initialState = initializeProfiles();


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
            let newProfiles = {};
            let profile = action.payload;
            for (let key of Object.keys(state)) {
                newProfiles[key] = state[key].filter(p => p != profile)
            }
            return { ...state, ...newProfiles };
        }
        case actionTypes.UPDATE_PROFILE: {
            let newProfiles = {};
            let profile = action.payload[0];
            for (let key of Object.keys(state)) {
                let active = action.payload.indexOf(key) > -1
                if (active && state[key].indexOf(profile) == -1)        // If active and profile not present, add profile
                    newProfiles[key] = [profile].concat(state[key])
                else if (!active && state[key].indexOf(profile) > -1)   // If inactive and profile present, remove profile
                    newProfiles[key] = state[key].filter(p => p != profile)
            }
            return { ...state, ...newProfiles };
        }
        default:
            return state;
    }
}

export default allergyReducer;