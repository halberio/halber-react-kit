import axios from "axios";
import store from "../stores/store-dev";
import { logout } from "../actions/auth-actions/actions";

import { history } from "../index";

const token = localStorage.getItem("halber_token");

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
});

axiosInstance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    switch (error.response.status) {
      case 401:
        // unauthorized -> token is invalid or expired
        // User must reconnect!
        store.dispatch(logout());
        history.push("/login");
        break;
      default:
        break;
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
