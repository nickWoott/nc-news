import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api";
import { useState, useEffect } from "react";
import { increaseVotes } from "../utils/api";
import ViewComments from "./ViewComments";
import WriteComment from "./WriteComment";
import DisplayComments from "./DisplayComments";

const SingleArticle = () => {
  const [selectedArticle, setSelectedArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
    getArticle(article_id)
      .then((article) => {
        setSelectedArticle(article);
        setVotes(article.votes);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        console.log(selectedArticle);
      });
  }, []);
  if (isLoading) {
    return <p>please wait articles loading</p>;
  }
  if (!isLoading && !selectedArticle.title) {
    return <p>sorry, that article does not exist</p>;
  }
  return (
    <div>
      <h2 className="article_title">{selectedArticle.title}</h2>
      <p className="article_body">{selectedArticle.body}</p>
      <h3 className="article_author">{selectedArticle.author}</h3>
      <p className="article_votes">votes: {votes}</p>
      <button
        className="article_vote_button"
        onClick={() => {
          clickHandler(1);
        }}
      >
        👍
      </button>
      <button
        className="article_vote_button"
        onClick={() => {
          clickHandler(-1);
        }}
      >
        👎
      </button>
      <ViewComments>
        <WriteComment />
        <DisplayComments
          selectedArticle={selectedArticle}
          setSelectedArticle={setSelectedArticle}
        />
      </ViewComments>
    </div>
  );
};

export default SingleArticle;
