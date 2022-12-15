import { GET_EXPERIENCE, GET_EXPERIENCE_ERROR } from "../actions/actions";

const initialState = {
  expData: [],
  error: false,
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE: {
      return {
        ...state,
        expData: action.payload,
      };
    }
    case GET_EXPERIENCE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default experienceReducer;
