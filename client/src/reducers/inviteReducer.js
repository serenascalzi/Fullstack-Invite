const initialState = {
	users:[],
	going:[],
	notgoing:[]
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_USERS':
			return{...state, users:action.payload}
		case 'GET_GOING':
			return{...state, going:action.payload}
		case 'GET_NOTGOING':
			return{...state, notgoing:action.payload}
		default:
			return state
	}
}
