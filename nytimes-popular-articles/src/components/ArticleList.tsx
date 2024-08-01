import React, { useEffect, useState } from "react";
import { fetchMostPopularArticles } from "../services/ApiService";
import { Article } from "../types/Article";
import "./ArticleList.css";
import dummyImg from "../assets/images.jpeg";

interface ArticleListProps {
  //   onArticleSelect: (article: Article) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({}) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMostPopularArticles(1); // Using a period of 1 day
      setArticles(data);
    };
    fetchData();
  }, []);

  const getThumbnailUrl = (article: Article): string => {
    const media = article?.media?.[0];
    return media
      ? media["media-metadata"].find((m) => m.format === "mediumThreeByTwo210")
          ?.url || dummyImg
      : dummyImg;
  };
  console.log("art", articles);

  return (
    <div className="article-list">
      <h1>Most Popular Articles</h1>
      <div className="cards">
        {articles.map((article) => (
          <div
            key={article.id}
            className="card"
            onClick={() => window.open(article.url, "_blank")}
          >
            <img src={getThumbnailUrl(article)} alt={article.title} />
            <div className="card-content">
              <h2>{article.title}</h2>
              <p>{article.abstract}</p>
              <div className="info">
                <p>Published By: {article.byline}</p>
                <p>
                  Published on:{" "}
                  {new Date(article.published_date).toDateString()}
                </p>
                <p>Source: {article.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
