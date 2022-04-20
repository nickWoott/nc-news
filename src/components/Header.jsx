import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header className="App-header">
        <h1>NC News</h1>
      </header>
    </Link>
  );
};

export default Header;
