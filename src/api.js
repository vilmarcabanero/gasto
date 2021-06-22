import axios from 'axios';

export default axios.create({
  // baseURL: `http://localhost:4000/api`
  baseURL: `https://gasto-v2-api.herokuapp.com/api`

});