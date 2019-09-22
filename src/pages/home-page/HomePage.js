import React from "react";
import "./home-page.scss";
import { Typography } from "antd";

const HomePage = () => {
  return (
    <div className="home-page">
      <Typography.Title className="title">
        Developed by <a href="http://halber.io"> Halber </a>
      </Typography.Title>
    </div>
  );
};

export default HomePage;
