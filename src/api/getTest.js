import { request } from "@/utils/request";

export const getTest = ({ type, subject }) => request({
    params: {
        type,
        subject,
        pagesize: 10,
        pagenum: 1,
        sort: 'rand',
        appkey: '932e864b22b02dbaed3463fd1e9fa8b8'
    }
})