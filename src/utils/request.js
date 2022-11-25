import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 5000
})


/**
 * 响应拦截器：
 * 服务端返回数据之后，前端，then 之前被调用
 */

service.interceptors.response.use(response => {

    const { Data } = response.data
    console.log(Data);
    return Data
})


export default service 