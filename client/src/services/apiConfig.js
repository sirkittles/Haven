import axios from 'axios';

// let apiUrl

// const apiUrls = {
//   production: '',
//   development: 'http://localhost:3000'
// };

// if (window.location.hostname === 'localhost') {
//   apiUrl = apiUrls.development
// } else {
//   apiUrl = apiUrls.production
// };

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://haven-p4-backend.herokuapp.com/' : 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
});

export default api;