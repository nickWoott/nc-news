import { useState } from "react";

const WriteComment = () => {
  return (
    <form>
      <input type="text"></input>
      <button type="submit">post</button>
    </form>
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
