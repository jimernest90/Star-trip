import Axios from 'axios'
const BASE_URL = `https://5dd1880415bbc2001448d287.mockapi.io/`

export const api = Axios.create({
	baseURL: BASE_URL,
	headers: {
	}
})
