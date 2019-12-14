import { wrapPromise } from "../utils/wrap-promise";
import API from "../utils/api";

const fetchSearch = params => {
  return fetch(API.search(params)).then(res => res.json());
};

export function fetchSearchData(params) {
  let searchPromise = fetchSearch(params);
  return {
    params,
    search: wrapPromise(searchPromise)
  };
}
