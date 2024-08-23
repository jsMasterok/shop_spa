import axios from "axios";

const instance = axios.create({
  baseURL: "https://crm.sitniks.com/open-api",
  headers: {
    Authorization: `Bearer DGoEUHrr1gCqM9j6syfSJP4yhYTOjlL3PZFSi16USXq`,
    "Content-Type": "application/json",
  },
});

export default instance;
