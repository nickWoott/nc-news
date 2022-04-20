import "./App.css";
import ArticleList from "./components/ArticleList.jsx";
import ArticlesHeader from "./components/ArticlesHeader";
import Header from "./components/Header";
import NavList from "./components/NavList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NavList />} />

        <Route
          path="/allArticles"
          element={
            <>
              <ArticlesHeader />
              <ArticleList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
