import { useState } from "react";

const ViewComments = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Close Comments" : "View Comments"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default ViewComments;
