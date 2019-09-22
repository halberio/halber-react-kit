import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS
} from "../actions/posts-actions/types";

const intialState = {
  posts: []
};

const postsReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return state;
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload };

    case FETCH_POSTS_FAILURE:
      return state;

    default:
      return state;
  }
};

export default postsReducer;
