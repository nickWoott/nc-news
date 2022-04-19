import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  return (
    <section>
      <p>{articles[0].title}</p>
    </section>
  );
};

export default ArticleList;
