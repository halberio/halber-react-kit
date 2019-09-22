/*
@
 This file contains the requests ( services )
@
*/

import axios from "axios";

function fetchPostsRequest() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

const PostsServices = {
  fetchPostsRequest
};

export default PostsServices;
