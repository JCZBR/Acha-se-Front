import axios from "axios";

export const http = axios.create({ baseURL: "https://acha-se-back-end.onrender.com"})

http.interceptors.request.use(
  (config) => {
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // console.log("request error", error);
    return Promise.reject(error);
  }
);

function getToken(){
  const token = localStorage.getItem("token")

  if(token){
    return token
  }
  return null
}