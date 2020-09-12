import axios from '../axios';
import { randomuser as api } from '../endpoints';

export default {
  find: (payload) => axios().get(`${api}`, { ...payload }),
};
