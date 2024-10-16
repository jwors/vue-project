import type { AxiosResponse } from 'axios'
import HTTP_STATUS from './httpCodes'

const customInterceptor = (chain: AxiosResponse) => {
	// const requestParams = chain.requestParams
	const { status, data, config } = chain
	// console.log(chain)
	// Taro.showLoading({
	//   title: '加载中',
	// })
	// console.log(status)
	if (status === 200) {
		// Taro.hideLoading()
		if (data?.status === HTTP_STATUS.NOT_FOUND) {
			return Promise.reject({ desc: '请求资源不存在' })
		} else if (data.status === HTTP_STATUS.BAD_GATEWAY) {
			return Promise.reject({ desc: '服务端出现了问题' })
		} else if (data.status === HTTP_STATUS.FORBIDDEN) {
			//   Taro.setStorageSync('Authorization', '')
			//   pageToLogin()
			return Promise.reject({ desc: '没有权限访问' })
		} else if (data.status === HTTP_STATUS.UNAUTHORIZED) {
			//   pageToLogin()
			return Promise.reject({ desc: '需要鉴权' })
		} else if (data.status === HTTP_STATUS.BAD_REQUEST) {
			return Promise.reject(data)
		} else if (data.status === HTTP_STATUS.INTERNAL_SERVER_ERROR) {
			return Promise.reject({ desc: '服务器错误' })
		} else if (data.status === HTTP_STATUS.OK) {
			if (data.status === 200) {
				return data
			} else {
				return Promise.reject({ desc: data.message })
			}
		} else if (data instanceof Blob && config.responseType === 'blob') {
			// 文件流
			return data
		} else if (data.errorCode) {
			return data
		}
	} else {
		if (config.responseType === 'blob') {
			return Promise.reject({
				message: '没有可以导出的数据！',
			})
		} else {
			return Promise.resolve(data)
		}
	}
}

export default customInterceptor
