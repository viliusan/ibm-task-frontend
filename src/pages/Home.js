import React, { useEffect, useState } from "react";
import { fetchApi } from "../requests/apiCalls";
import { dummyData } from "../constants";
import ArticleCard from "../components/ArticleCard";
import { sendOpenedArticle } from "../requests/userActions";
import "./Home.css";

const Home = () => {
  // useEffect(() => {
  //   fetchApi();
  // }, []);

  return (
    <div className="root">
      {dummyData.data.articles.map((article, index) => (
        <ArticleCard
          img={article.image}
          title={article.title}
          description={article.description}
          publishedAt={article.publishedAt}
          key={index}
        />
      ))}
    </div>
  );
};

export default Home;
