import { ADD_ALL_POSTS } from "../actions/actions";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
