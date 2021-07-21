import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

instance.defaults.headers.post["Accept"] = [
  "application/json",
  "multipart/form-data",
];
instance.defaults.headers.put["Accept"] = [
  "application/json",
  "multipart/form-data",
];

export default instance;
