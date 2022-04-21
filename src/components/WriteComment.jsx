import { useState } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";

const WriteComment = () => {
  const [message, setMessage] = useState("");
  const { article_id } = useParams();
  const submitHandler = (e) => {
    e.preventDefault();
    postComment(article_id, e.target.username.value, e.target.comment.value)
      .then(() => {
        setMessage("comment posted");
      })
      .catch((err) => {
        setMessage("please enter a valid username");
      });
  };
  return (
    <>
      <ShowForm>
        <p>{message}</p>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <label htmlFor="username"></label>
          <input type="text" id="username" required></input>

          <label htmlFor="comment"></label>
          <input type="text" id="comment" required></input>

          <button type="submit">post</button>
        </form>
      </ShowForm>
    </>
  );
};

const ShowForm = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Discard Comment" : "Post Comment"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default WriteComment;
