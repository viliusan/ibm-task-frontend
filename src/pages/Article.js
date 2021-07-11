import React from "react";
import { withRouter } from "react-router-dom";
import { Image } from "react-bootstrap";
import moment from "moment";
import "../styles/Article.css";

const Article = () => {
  const articleData = JSON.parse(localStorage.getItem("article"));

  return (
    <div className="article">
      <h1>{articleData.title}</h1>
      <h3>{articleData.description}</h3>
      <Image src={articleData.img} fluid />
      <p>{articleData.content}</p>
      <p>
        Published at: {moment(articleData.publishedAt).format("MM/DD/YYYY")}
      </p>
    </div>
  );
};

export default withRouter(Article);
