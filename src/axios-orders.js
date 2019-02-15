import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-maker-reactjs.firebaseio.com/'
});

export default instance;