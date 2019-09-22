/*
@
 This file contains the actions creators
@
*/

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS
} from "./types";

import PostsServices from "./service";

export function fetchPosts() {
  return async dispatch => {
    dispatch({
      type: FETCH_POSTS_REQUEST
    });
    try {
      const response = await PostsServices.fetchPostsRequest();

      await dispatch({
        type: FETCH_POSTS_SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: FETCH_POSTS_FAILURE
      });
    }
  };
}
