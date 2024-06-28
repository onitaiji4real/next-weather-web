import axios from "axios";
import { baseAxios } from "./baseAxios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const weatherFetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: headers,
  });
  return res.data;
};
