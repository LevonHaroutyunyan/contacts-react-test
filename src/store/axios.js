import axios from 'axios';
import { authChecker } from 'utils/authChecker';
// const { REACT_APP_API_ROOT } = process.env;

export default () => {
  const token = getToken();
  const service = axios.create({
    // baseURL: REACT_APP_API_ROOT,
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
