import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { fetchApiByTopic } from "../requests/apiCalls";
import "../styles/FileList.css";

const Topic = () => {
  const { id } = useParams();
  const [result, setResult] = useState([]);
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      await fetchApiByTopic(id).then((res) => setResult(res));
    }
    fetchData();
  }, [id]);

  if (!result?.data?.articles.length) return null;
  return (
    <div className="listFiles">
      {result.data.articles.map((article, index) => (
        <ArticleCard
          img={article.image}
          title={article.title}
          description={article.description}
          publishedAt={article.publishedAt}
          content={article.content}
          key={index}
        />
      ))}
    </div>
  );
};

export default Topic;
