import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import { useState, useEffect } from "react";
import { increaseVotes } from "../utils/api";

const DisplayArticle = ({ selectedArticle, setSelectedArticle }) => {
  const clickHandler = (increment) => {
    setVotes((currVotes) => {
      const newVotes = currVotes + increment;
      return newVotes;
    });
    increaseVotes(article_id, increment);
  };

  const { article_id } = useParams();

  const [votes, setVotes] = useState(0);

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setSelectedArticle(article);
      setVotes(article.votes);
    });
  }, []);
  return (
    <div>
      <h2>{selectedArticle.title}</h2>
      <p>{selectedArticle.body}</p>
      <h3>{selectedArticle.author}</h3>
      <p>votes: {votes}</p>
      <button
        onClick={() => {
          clickHandler(1);
        }}
      >
        👍
      </button>
      <button
        onClick={() => {
          clickHandler(-1);
        }}
      >
        👎
      </button>
    </div>
  );
};

export default DisplayArticle;
