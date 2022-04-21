import { useState, useEffect, useParams } from "react";
import { getComments, deleteComment } from "../utils/api";

const DisplayComments = ({ selectedArticle, setSelectedArticle }) => {
  const [comments, setComments] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const clickHandler = (comment_id) => {
    deleteComment(comment_id);
    setDeleteConfirmation(true);
  };
  useEffect(() => {
    getComments(selectedArticle.article_id).then((comments) => {
      setComments(comments);
      setDeleteConfirmation(false);
    });
  }, [selectedArticle, deleteConfirmation]);
  return (
    <>
      <h3>comments</h3>

      {comments.map((comment) => {
        return (
          <li key={comment.comment_id}>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
            <button
              onClick={() => {
                clickHandler(comment.comment_id);
              }}
            >
              delete comment
            </button>
          </li>
        );
      })}
    </>
  );
};

export default DisplayComments;
