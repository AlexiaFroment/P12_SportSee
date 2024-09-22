import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/user",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})
