import axios from 'axios';
import { authChecker } from 'utils/authChecker';
// const { REACT_APP_API_ROOT } = process.env;
import { randomuser } from './endpoints'; 

export default () => {
  const token = authChecker();
  const service = axios.create({
    baseURL: randomuser,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  });
  service.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const response = error.response.data;
      return Promise.reject(response);
    }
  );
  return service;
};
