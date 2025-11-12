import axios from "axios";

const instance = axios.create({
  baseURL: 'https://68e4ef458e116898997da4d6.mockapi.io',
  headers: {'Content-Type': 'application/json'},
});

export default instance;