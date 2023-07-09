import axios from "axios";
const API_BASE = 'https://therarbg.com';

const headersApplicationJson = {
  "Content-Type": "application/json",
};

export const registerApi = (data) => {
  let url = `${API_BASE}/auth/api/v1/user/`
  return axios.post(url, data, { headers: headersApplicationJson })
}
export const loginApi = (data) => {
  let url = `${API_BASE}/auth/api/v1/token/`
  return axios.post(url, data, { headers: headersApplicationJson })
}
export const moviesListApi = (page,category)=>{
  let url = `${API_BASE}/get-posts/category:${category}:time:10D:format:json/?page=${page}`
  return axios.get(url, { headers: headersApplicationJson })
}