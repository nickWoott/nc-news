import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TopicList = ({ articles, setArticles }) => {
  const { topic } = useParams();
  getArticles(topic).then((articles) => {
    setArticles(articles);
  });
  return articles.map((article) => {
    return (
      <li key={article.article_id} className="article-list">
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
      </li>
    );
  });
};

export default TopicList;
