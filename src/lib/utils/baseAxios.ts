import axios from "axios";

export function baseAxios() {
  const axiosInstance = axios.create({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return axiosInstance;
}
