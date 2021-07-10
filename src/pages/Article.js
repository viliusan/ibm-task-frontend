import React from "react";
import { useParams, withRouter } from "react-router-dom";
import { Image } from "react-bootstrap";
import "../styles/Article.css";

const Article = () => {
  const { id } = useParams();
  const articleData = JSON.parse(localStorage.getItem("article"));
  console.log(articleData);
  // const { props } = location.state;

  return (
    <div className="article">
      <h1>{articleData.title}</h1>
      <h3>{articleData.description}</h3>
      <Image src={articleData.img} fluid />
      <p>{articleData.content}</p>
      <p>Published at: {articleData.publishedAt}</p>
    </div>
  );
};

export default withRouter(Article);
