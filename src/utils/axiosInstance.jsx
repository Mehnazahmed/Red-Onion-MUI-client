import axios from "axios";

const baseUrl = 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: baseUrl, // It should be 'baseURL' instead of 'baseUrl'
  headers: {
    // You can set headers here if needed
  },
});

export default axiosInstance;