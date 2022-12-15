import { CHANGE_CLICKED_SEARCH_STATUS } from "../actions/actions";

const initialState = {
  clicked: false,
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CLICKED_SEARCH_STATUS: {
      return {
        ...state,
        clicked: action.payload,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
