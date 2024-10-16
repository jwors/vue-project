import serverConfig from '@/config/config'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import Axios from 'axios'
import interceptors from './interceptors'

interface RequestMethodType {
	url: string
	params?: any
	config?: AxiosRequestConfig
}

class RequestHttp {
	instance: AxiosInstance
	constructor(config: AxiosRequestConfig) {
		this.instance = Axios.create(config)

		/*
						请求拦截器
				*/

		this.instance.interceptors.request.use(
			// eslint-disable-next-line @typescript-eslint/no-shadow
			(config) => {
				let result = localStorage.getItem('TOKEN')
				if (result != null) {
					result = JSON.parse(result)
				}
				const Token = ('Bearer ' + result?.token) as string
				if (Token) {
					config.headers!.Authorization = Token
				}
				return config
			},
			(error: AxiosError) => {
				// 请求错误
				return Promise.reject(error)
			},
		)

		// 响应拦截
		this.instance.interceptors.response.use(
			(response: AxiosResponse) => {
				return interceptors(response)
			},
			(err) => {
				return interceptors(err.response)
			},
		)
	}

	// 定义请求方法
	public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.instance.request(config)
	}

	// 常用方法封装
	public get<T, R = ResultData<T>>({ url, config }: RequestMethodType): Promise<R> {
		return this.instance.get(url, config)
	}
	public post<T, R = ResultData<T>>({ url, params, config }: RequestMethodType): Promise<R> {
		return this.instance.post(url, params, config)
	}
	public put<T, R = ResultData<T>>({ url, params, config }: RequestMethodType): Promise<R> {
		return this.instance.put(url, params, config)
	}
	public delete<T, R = ResultData<T>>({ url, config }: RequestMethodType): Promise<R> {
		return this.instance.delete(url, config)
	}
}
export default new RequestHttp({
	baseURL: serverConfig.apiUrl,
})
