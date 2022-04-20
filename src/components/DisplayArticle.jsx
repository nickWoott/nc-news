import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import { useState } from "react";

const DisplayArticle = () => {
  const { article_id } = useParams();
  const [selectedArticle, setSelectedArticle] = useState({});
  getArticle(article_id).then((article) => {
    setSelectedArticle(article);
  });
  return (
    <div>
      <h2>{selectedArticle.title}</h2>
      <p>{selectedArticle.body}</p>
      <h3>{selectedArticle.author}</h3>
    </div>
  );
};

export default DisplayArticle;
