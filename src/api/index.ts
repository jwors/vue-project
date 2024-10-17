import request from '@/http/request';

export const testInterFace = () => request.get({
	url: '/docs/getDocs'
})