declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false

declare const UMI_ENV: 'dev' | 'staging' | 'prod'

declare interface Result {
	status: number
	message: string | null
	errorCode: number | null
}

declare interface Paging {
	current: number
	pageSize: number
}

declare interface RecordsType<T> {
	records: T,
	total: number,
}

// 请求响应参数，包含data
declare interface ResultData<T = any> extends Result {
	data: T
}
