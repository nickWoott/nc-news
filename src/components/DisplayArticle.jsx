import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import { useState, useEffect } from "react";
import { increaseVotes } from "../utils/api";

const DisplayArticle = () => {
  const clickHandler = (e, increment) => {
    setVotes((currVotes) => {
      const newVotes = currVotes + increment;
      return newVotes;
    });
    increaseVotes(article_id, increment).then((res) => {});
  };

  const { article_id } = useParams();
  const [selectedArticle, setSelectedArticle] = useState({});
  const [votes, setVotes] = useState(selectedArticle.votes);

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setSelectedArticle(article);
    });
  }, [votes]);
  return (
    <div>
      <h2>{selectedArticle.title}</h2>
      <p>{selectedArticle.body}</p>
      <h3>{selectedArticle.author}</h3>
      <p>votes: {selectedArticle.votes}</p>
      <button
        onClick={(e) => {
          clickHandler(e, 1);
        }}
      >
        👍
      </button>
      <button
        onClick={(e) => {
          clickHandler(e, -1);
        }}
      >
        👎
      </button>
    </div>
  );
};

export default DisplayArticle;
