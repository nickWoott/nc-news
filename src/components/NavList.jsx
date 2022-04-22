import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import { useEffect, useState } from "react";

const NavList = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);
  return (
    <ul className="navList">
      <Link key="allarticles" className="navList_link" to="/articles">
        <li key="allArticles" className="navList_item">
          all articles
        </li>
      </Link>

      {topics.map((topic) => {
        return (
          <Link
            key={topic.slug}
            className="navList_link"
            to={`/articles/${topic.slug}`}
          >
            {" "}
            <li className="navList_item">{topic.slug}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;
