import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/posts-actions/actions";

const PostsPage = props => {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  return <div className="posts-page">posts goes here!</div>;
};

export default connect(
  null,
  { fetchPosts }
)(PostsPage);
