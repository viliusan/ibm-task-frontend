import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import { fetchApi } from "../requests/apiCalls";
import "../styles/FileList.css";

const Search = () => {
  const { query } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetchApi(query).then((res) => setResult(res));
    }
    fetchData();
  }, [query]);

  if (!result?.data?.articles.length) return null;
  return (
    <div className="listFiles">
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

export default Search;
