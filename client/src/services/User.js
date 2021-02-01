import Axios from "axios";

export const AuthUser = (username,password) => Axios.post("api/user/login", {username,password})

export const RegUser = (username,password) => Axios.post("api/user/register", {username,password})

export const LogOutUser = () => Axios.post("api/user/logout")