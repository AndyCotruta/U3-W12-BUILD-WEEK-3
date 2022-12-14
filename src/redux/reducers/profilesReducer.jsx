import { ADD_ALL_PROFILES, ADD_CLICKED_PROFILE } from "../actions/actions";

const initialState = {
  allProfiles: [],
  clickedProfile: [],
};

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_PROFILES: {
      return {
        ...state,
        allProfiles: action.payload,
      };
    }

    case ADD_CLICKED_PROFILE: {
      return {
        ...state,
        clickedProfile: action.payload,
      };
    }

    default:
      return state;
  }
};

export default profilesReducer;
