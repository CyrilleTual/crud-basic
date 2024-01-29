import axiosInitial from "axios";

export const axios = axiosInitial.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
