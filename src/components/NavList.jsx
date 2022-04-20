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
    <ul>
      <Link to="/articles">
        <li className="navList">all articles</li>
      </Link>

      {topics.map((topic) => {
        return (
          <Link to={`/articles/${topic.slug}`}>
            {" "}
            <li className="navList" key={topic.slug}>
              {topic.slug}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;
