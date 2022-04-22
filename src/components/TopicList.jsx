import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TopicList = ({ articles, setArticles }) => {
  const { topic } = useParams();
  const [sort, setSort] = useState("author");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    getArticles(topic, sort, order).then((articles) => {
      setArticles(articles);
    });
  }, [topic, sort, order]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const orderHandler = (e) => {
    setOrder(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <label htmlFor="sort">sort by</label>
      <select
        name="sort"
        id="sort"
        onChange={(e) => {
          sortHandler(e);
        }}
      >
        <option value="author">author</option>
        <option value="votes">votes</option>
        <option value="comment_count">comment count</option>
      </select>
      <label htmlFor="order"></label>
      <select
        name="order"
        id="order"
        onChange={(e) => {
          orderHandler(e);
        }}
      >
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
      {articles.map((article) => {
        return (
          <li key={article.article_id} className="article-list">
            <Link to={`/article/${article.article_id}`}>
              <h2>{article.title}</h2>
            </Link>
            <h3>{article.author}</h3>
          </li>
        );
      })}
    </>
  );
};
export default TopicList;
