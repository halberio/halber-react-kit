import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/posts-actions/actions";
import { Card } from "antd";

import "./posts-page.scss";

const PostsPage = props => {
  useEffect(() => {
    props.fetchPosts();
  }, []);
  return (
    <div className="posts-page">
      {props.posts.map((ele, index) => {
        return (
          <Card key={index} title={ele.title} style={{ width: 300 }}>
            <p>{ele.body}</p>
          </Card>
        );
      })}
    </div>
  );
};

const mapStateToProps = reduxStore => {
  return {
    posts: reduxStore.postsReducer.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsPage);
