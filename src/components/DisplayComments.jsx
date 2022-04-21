import { useState, useEffect } from "react";
import { getComments } from "../utils/api";

const DisplayComments = ({ selectedArticle }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(selectedArticle.article_id).then((comments) => {
      setComments(comments);
      console.log(comments, "<<< comments");
    });
  }, [selectedArticle]);
  return (
    <>
      <h3>comments</h3>

      {comments.map((comment) => {
        return (
          <>
            <p>{comment.body}</p>
            <p>{comment.author}</p>
          </>
        );
      })}
    </>
  );
};

export default DisplayComments;
