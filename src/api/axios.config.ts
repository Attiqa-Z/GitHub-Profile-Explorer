"use client";
import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://api.github.com",
});

const onSuccess = function (response: AxiosResponse) {
  console.debug("Request Successful!", response);
  return response.data;
};
client.interceptors.response.use(onSuccess, async function (error) {
  if (error.response) {
    if (error.response.data.code === 401 || error?.response?.status === 401) {
      console.log("inside error", error);
    }
  } else {
    console.error("Error Message:", error.message);
  }
  return Promise.reject(error);
});

export default client;
