import React, { useState } from "react";
import ArticleList from "./components/ArticleList";
import { Article } from "./types/Article";
import ArticleDetails from "./components/ArticleDetails";

const App: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="App">
      <ArticleList />
      {/* {selectedArticle && <ArticleDetails article={selectedArticle} />} */}
    </div>
  );
};

export default App;
