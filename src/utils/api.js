import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-app-nw.herokuapp.com/api",
});

export const getArticles = (topic) => {
  if (topic) {
    return newsApi.get(`/articles/?topic=${topic}`).then(({ data }) => {
      return data;
    });
  } else {
    return newsApi.get(`/articles`).then(({ data }) => {
      return data;
    });
  }
};

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data;
  });
};

export const getArticle = (id) => {
  return newsApi.get(`/articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const increaseVotes = (id, increment) => {
  return newsApi
    .patch(`/articles/${id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data;
    });
};

export const getComments = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};
