import axios from "axios";

const API = axios.create({

  baseURL:
  "https://ecommerce-website-c88o.onrender.com/api",

});

export default API;