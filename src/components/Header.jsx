import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link className="App-header_link" to="/">
      <header className="App-header">
        <h1 className="header_text">NC News</h1>
      </header>
    </Link>
  );
};

export default Header;
