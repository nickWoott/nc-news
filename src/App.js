import "./App.css";

import Header from "./components/Header";
import NavList from "./components/NavList";
import TopicList from "./components/TopicList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DisplayArticle from "./components/DisplayArticle";
import DisplayComments from "./components/DisplayComments";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
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
        <Route
          path="/article/:article_id"
          element={
            <>
              <DisplayArticle
                selectedArticle={selectedArticle}
                setSelectedArticle={setSelectedArticle}
              />
              <DisplayComments selectedArticle={selectedArticle} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
