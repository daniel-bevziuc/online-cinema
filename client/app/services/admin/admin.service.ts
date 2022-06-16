import axios from 'api/interceptors'

import { getUsersUrl } from '@/configs/api.config'

export const AdminService = {
	async getCountUsers() {
		return axios.get<number>(getUsersUrl('/count'))
	},
}
