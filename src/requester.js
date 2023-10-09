import axios from "axios";
import { getTokenFromCookies } from "./cookies";

const API = axios.create({
  baseURL: "http://64.227.134.242:4004",
});

export default API;

API.interceptors.request.use(
  function (config) {
    const customConfig = config;
    const token = getTokenFromCookies();

    if (token) {
      customConfig.headers.Authorization = `Bearer ${token}`;
    }
    return customConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);
