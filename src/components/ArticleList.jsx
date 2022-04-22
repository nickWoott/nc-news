import { getArticles } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ArticleList = ({ articles, setArticles }) => {
  const { topic } = useParams();
  const [sort, setSort] = useState("author");
  const [order, setOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(topic, sort, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sort, order]);

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  const orderHandler = (e) => {
    setOrder(e.target.value);
    console.log(e.target.value);
  };
  if (isLoading) {
    return <p>loading</p>;
  }
  if (!isLoading && !articles.length) {
    return <p>no articles found</p>;
  }

  return (
    <>
      <label className="select" htmlFor="sort">
        sort by
      </label>
      <select
        className="select"
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
        className="select"
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
          <li key={article.article_id} className="article-list_item">
            <Link
              className="article-list_link"
              to={`/article/${article.article_id}`}
            >
              <h2>{article.title}</h2>
            </Link>
            <h3>{article.author}</h3>
          </li>
        );
      })}
    </>
  );
};
export default ArticleList;
