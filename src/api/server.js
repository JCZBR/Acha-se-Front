import axios from "axios";

export const http = axios.create({ baseURL: "https://acha-se-back-end.onrender.com", headers: {
  Authorization: "Bearer " + getToken()
}})

function getToken(){
  const token = localStorage.getItem("token")
  if(token){
    return token
  }
  return null
}