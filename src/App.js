import "./App.css";

import Header from "./components/Header";
import NavList from "./components/NavList";
import TopicList from "./components/TopicList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

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
      </Routes>
    </div>
  );
}

export default App;
