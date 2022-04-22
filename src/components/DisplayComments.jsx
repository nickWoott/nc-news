import { useState, useEffect, useParams } from "react";
import { getComments, deleteComment } from "../utils/api";

const DisplayComments = ({ selectedArticle, setSelectedArticle }) => {
  const [comments, setComments] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const clickHandler = (comment_id) => {
    console.log("clickhandler working");
    console.log(selectedArticle.article_id, "<<this is the article id");
    deleteComment(comment_id);
    setDeleted(true);
    console.log(deleted, "this is the deleted state");
  };
  useEffect(() => {
    getComments(selectedArticle.article_id).then((comments) => {
      setComments(comments);
      setDeleted(false);
    });
  }, [selectedArticle, deleted]);
  return (
    <>
      <h3>comments</h3>

      {comments.map((comment) => {
        return (
          <>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <button
              onClick={() => {
                clickHandler(comment.comment_id);
              }}
            >
              delete comment
            </button>
          </>
        );
      })}
    </>
  );
};

export default DisplayComments;
