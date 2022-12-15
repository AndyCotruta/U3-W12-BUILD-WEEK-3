import {
  ADD_EXPERIENCE,
  CHANGE_SHOW_MODAL,
  GET_EXPERIENCE,
  GET_EXPERIENCE_ERROR,
} from "../actions/actions";

const initialState = {
  expData: [],
  error: false,
  addedExp: null,
  showModal: false,
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE: {
      return {
        ...state,
        expData: action.payload,
      };
    }

    case ADD_EXPERIENCE: {
      return {
        ...state,
        addedExp: action.payload,
      };
    }

    case CHANGE_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.payload,
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
