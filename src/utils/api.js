import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-app-nw.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    console.log(data, "<<< returned data");
    return data;
  });
};
