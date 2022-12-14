import { ADD_ALL_PROFILES } from "../actions/actions";

const initialState = {
  allProfiles: [],
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_PROFILES: {
      return {
        ...state,
        allProfiles: action.payload,
      };
    }

    default:
      return state;
  }
};

export default profilesReducer;
