import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  return articles.map((article) => {
    return (
      <li key={article.article_id} className="article-list">
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
      </li>
    );
  });
};

export default ArticleList;
