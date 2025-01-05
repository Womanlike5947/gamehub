import axios from 'axios';

const API_KEY = '44bf1498e4df4157abb39ee2ecbd9d67';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY,
  },
});
