import axios from "axios";

const instance = axios.create({
  // baseURL: "http://35.154.86.59/api/admin",

  baseURL: "http://35.154.225.110:5000",
});

export default instance;
