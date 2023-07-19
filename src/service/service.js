import axios from "axios";
const API_BASE = 'https://therarbg.com';
let token;

const headersApplicationJson = {
  "Content-Type": "application/json"
};

export const registerApi = (data) => {
  let url = `${API_BASE}/auth/api/v1/user/`
  return axios.post(url, data, { headers: headersApplicationJson })
}
export const loginApi = (data) => {
  let url = `${API_BASE}/auth/api/v1/token/`
  return axios.post(url, data, { headers: headersApplicationJson })
}
export const moviesListApi = (page, category, time) => {
  let url = category === "false" ? `${API_BASE}/get-posts/time:${time}:format:json/?page=${page}` : `${API_BASE}/get-posts/category:${category}:time:${time}:format:json/?page=${page}`;
  return axios.get(url, { headers: headersApplicationJson })
}
export const movieDetailsPost = (id,slug) => {
  let url = `${API_BASE}/post-detail/${id}/${slug}/?format=json`;
  return axios.get(url, { headers: headersApplicationJson })
}

export const getListComment = (eid,token) => {
  let url = `${API_BASE}/user/api/v1/list-comment/${eid}/`;
  return axios.get(url, { headers: {
    "Content-Type": "application/json",
    "Authorization":"Bearer "+token
  } })
}


export const postComment = (data,token) => {
  let url = `${API_BASE}/user/api/v1/create-comment/`;
  return axios.post(url, data,{ headers: {
    "Content-Type": "application/json",
    "Authorization":"Bearer "+token
  } })
}