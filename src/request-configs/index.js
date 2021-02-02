import axios from "axios";

const request = axios.create({
  baseURL: "https://600d644ff979dd001745cb07.mockapi.io/api/v1/",
  timeout: 4000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default request;
