import React from "react";
import { Article } from "../types/Article";

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetails: React.FC<ArticleDetailProps> = ({ article }) => {
  if (!article) {
    return <div>Select an article to see details...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetails;
