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
		oaAppUrl: 'https://subsidy.sharing8.cn',
		reamId: 'station',
		apiUrl: '/api',
		ssoV2Config: {
			ssoUrl: '//sso.sharing8.cn',
			hydraHost: 'http://192.168.110.21:32544',
			ssoClientId: 'sharing-plasma-oa',
		},
	},

}
export default config.dev
