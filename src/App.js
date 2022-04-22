import "./App.css";
import Header from "./components/Header";
import NavList from "./components/NavList";
import ArticleList from "./components/ArticleList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NavList />} />
        <Route
          path="/articles"
          element={
            <ArticleList setArticles={setArticles} articles={articles} />
          }
        />
        <Route
          path="/articles/:topic"
          element={
            <ArticleList setArticles={setArticles} articles={articles} />
          }
        />
        <Route path="/article/:article_id" element={<SingleArticle />} />
        <Route path="/*" element={<p>sorry, this path does not exsist</p>} />
      </Routes>
    </div>
  );
}

export default App;
