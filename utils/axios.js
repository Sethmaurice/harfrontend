import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:4000', // Replace with your backend URL local
  baseURL: 'https://harambeeback.onrender.com', // Replace with your backend URL remote
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
