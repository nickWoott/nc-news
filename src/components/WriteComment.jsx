import { useState } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";

const WriteComment = () => {
  const [message, setMessage] = useState("");
  const { article_id } = useParams();
  console.log(article_id);
  const submitHandler = (e) => {
    e.preventDefault();
    setMessage("comment posted");
    console.log(e.target.username.value, "<< username");
    console.log(e.target.comment.value, "<< comment");
    postComment(article_id, e.target.username.value, e.target.comment.value)
      .then(() => {})
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
          <input type="text" id="username"></input>

          <label htmlFor="comment"></label>
          <input type="text" id="comment"></input>

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
