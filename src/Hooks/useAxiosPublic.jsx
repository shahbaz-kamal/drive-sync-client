import axios from "axios";
import React from "react";

const axiosInstance = axios.create({
  //   baseURL: "http://localhost:5000/",
  baseURL: "https://drive-sync-server.vercel.app/",
  withCredentials: true,
});

const useAxiosPublic = () => {
  return axiosInstance;
};

export default useAxiosPublic;
