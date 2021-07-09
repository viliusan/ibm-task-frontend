import React from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "../constants";
import { Image } from "react-bootstrap";
import "../styles/Article.scss";

const Article = () => {
  const { id } = useParams();
  var clickedArticle = {};
  console.log(id);

  for (let article of dummyData.data.articles) {
    if (article.title === id) {
      clickedArticle = article;
    }
  }

  console.log(clickedArticle);

  return (
    <div className="article">
      <h1>{clickedArticle.title}</h1>
      <h3>{clickedArticle.description}</h3>
      <Image src={clickedArticle.image} fluid />
      <p>{clickedArticle.content}</p>
      <p>Published at: {clickedArticle.publishedAt}</p>
    </div>
  );
};

export default Article;
