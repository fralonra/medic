import axios from 'axios';

const config = {
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json'//x-www-form-urlencoded;charset=UTF-8'
  },
  timeout: 10000,
  responseType: 'json'
};

axios.interceptors.response.use(function (res) {
  //相应拦截器
  return res.data;
});


export function get(url) {
  return axios.get(url, config);
}

export function post(url, data) {
  return axios.post(url, data, config);
}
