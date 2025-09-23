import axios, {AxiosError} from "axios";
import type { AxiosResponse } from "axios";

const $axios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

$axios.interceptors.response.use(
    async (config: any) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

$axios.interceptors.response.use(
    async (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

export default $axios;