import axios from "axios";
import qs from "qs";

const ApiKey = process.env.REACT_APP_NEWS_API_KEY;

const instance = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 1000,
  paramsSerializer: (params) => qs.stringify(params),
});

const mainService = {
  getNews: (params) =>
    instance.get("/top-headlines", {
      params: {
        ...params,
        apiKey: ApiKey,
        country: "ru",
      },
    }),
};

export default mainService;
