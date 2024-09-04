import axios from "axios";

const instance = axios.create({
  baseURL: "https://best-wishes-523394bb75d0.herokuapp.com",
});

export default instance;
