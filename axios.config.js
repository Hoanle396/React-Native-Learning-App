import * as axios from "axios";
import * as SecureStore from 'expo-secure-store';

var axiosInstance = axios.create({
  baseURL: 'http://192.168.1.7:3000/api',
});
axiosInstance.interceptors.request.use(
  async config => {
     if (!config.headers.Authorization) {
       const token = await SecureStore.getItemAsync('access_token') ?? ''
       if (token) {
         config.headers.Authorization = `Bearer ${token}`;
       }
     }
     return config;
   },
   error => Promise.reject(error)
 );

export default axiosInstance;

var chatAPI = axios.create({
  baseURL: 'http://192.168.1.7:5000/api',
});
chatAPI.interceptors.request.use(
  async config => config,
  error => Promise.reject(error)
);
chatAPI.interceptors.response.use(async response => response.data, error => Promise.reject(error))

export { chatAPI }