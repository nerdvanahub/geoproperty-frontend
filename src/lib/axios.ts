import axios, { AxiosError } from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosIntance = axios.create({
  baseURL: baseUrl,
});

export default axiosIntance;
export { AxiosError, axios };
