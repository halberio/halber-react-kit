import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import postsReducer from "./posts-reducer";

const rootReducer = combineReducers({
  authReducer,
  postsReducer
});

export default rootReducer;
