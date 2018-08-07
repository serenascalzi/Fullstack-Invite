import axios from 'axios'
import store from '../store'

export function getUsers() {
	axios.get('/api/users').then(resp => {
		store.dispatch({
			type:'GET_USERS',
			payload:resp.data
		})
	})
}
