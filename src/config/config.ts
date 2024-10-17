type KeyType = 'dev' | 'staging' | 'prod' | 'verify'

type ConfigType = {
	[key in KeyType]: {
		oaAppUrl: string // 应用域名
		reamId: string
		apiUrl: string // 接口请求地址
		ssoV2Config: {
			// sso 登录的
			ssoUrl: string
			hydraHost: string
			ssoClientId: string
		}
	}
}
const config = {
	dev: {
		apiUrl: '/api',
	},

}
export default config.dev
