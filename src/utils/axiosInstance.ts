import axios from "axios";

const baseOrigin = "http://127.0.0.1:4000";

export const normalAxiosInstance = axios.create({ baseURL: baseOrigin });
export const credentialAxiosInstance = axios.create({
  baseURL: baseOrigin,
  withCredentials: true,
});
