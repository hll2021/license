//封装网络请求
import axios from 'axios';
//创建一个axios实例
export const request = axios.create({
    baseURL: "/api"
})
