import { api } from './ApiConfig'

export const getAllCrew = async () => {
	try {
		const resp = await api.get('/crew/crew')
		return resp.data
	} catch (error) {
		throw error
	}
}

export const getSingleMember = async (crew_id) => {
	try {
		const resp = await api.get(`/crew/crew/${crew_id}`)
		console.log(resp.data)
		return resp.data
	} catch (error) {
		throw error
	}
	
}

export const removeMember = async (crew_id) => {
	try {
		const resp = await api.delete(`/crew/crew/${crew_id}`)
		return resp.data
	} catch (error) {
		throw error
	}
}

