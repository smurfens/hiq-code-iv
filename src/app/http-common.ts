import axios from "axios";

export const URL = "https://www.reddit.com";

export const http = axios.create({
  baseURL: URL,
});

export default http;
