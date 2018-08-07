import {createStore} from 'redux'

import inviteReducer from './reducers/inviteReducer'

const store = createStore(inviteReducer)

export default store
