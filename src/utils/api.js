import { BASE_API_URL, API_KEY, RESOURCE_PUBLIC } from "./constants";

const API = {
  search: ({ q = "", limit = 8, offest = 0, rating = "G", lang = "en" }) =>
    `${BASE_API_URL}${RESOURCE_PUBLIC}/search?api_key=${API_KEY}&q=${q}&limit=${limit}&offset=${offest}&rating=${rating}&lang=${lang}`
};

export default API;
