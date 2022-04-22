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
      <Link className="navList_link" to="/articles">
        <li className="navList_item">all articles</li>
      </Link>

      {topics.map((topic) => {
        return (
          <Link className="navList_link" to={`/articles/${topic.slug}`}>
            {" "}
            <li className="navList_item" key={topic.slug}>
              {topic.slug}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;
