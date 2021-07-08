import React, { useEffect, useState } from "react";
import { fetchApi } from "../requests/apiCalls";
import { dummyData } from "../constants";
import ArticleCard from "../components/ArticleCard";
import "../styles/Home.css";

const Home = () => {
  const [result, setResult] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     await fetchApi().then((res) => setResult(res));
  //   }
  //   fetchData();
  // }, []);

  if (!result?.data?.articles.length) return null;
  return (
    <div className="search">
      {result.data.articles.map((article, index) => (
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
