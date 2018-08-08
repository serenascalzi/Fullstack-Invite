import axios from 'axios'
import store from '../store'

export function getUsers() {
	axios.get('/api/users').then(resp => {
		store.dispatch({
			type:'GET_USERS',
			payload:resp.data
		})
	})
	getGoing()
    getNotGoing()
}

export function getGoing() {
	axios.get('/api/going').then(resp => {
		store.dispatch({
			type:'GET_GOING',
			payload:resp.data
		})
	})
}

export function getNotGoing() {
	axios.get('/api/notgoing').then(resp => {
		store.dispatch({
			type:'GET_NOTGOING',
			payload:resp.data
		})
	})
}

export function updateStatus(id, status) {
	axios.patch('/api/users/' + id, {
		status:status
	}).then(resp => {
		getUsers()
	})
}
