import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.71.88.56:3333/',
});

export default api;
