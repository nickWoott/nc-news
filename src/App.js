import "./App.css";

import Header from "./components/Header";
import NavList from "./components/NavList";
import TopicList from "./components/TopicList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DisplayArticle from "./components/DisplayArticle";

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<NavList />} />
        <Route
          path="/articles"
          element={<TopicList setArticles={setArticles} articles={articles} />}
        />
        <Route
          path="/articles/:topic"
          element={<TopicList setArticles={setArticles} articles={articles} />}
        />
        <Route path="/article/:article_id" element={<DisplayArticle />} />
      </Routes>
    </div>
  );
}

export default App;
