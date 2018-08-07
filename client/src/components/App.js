import React, {Component} from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import store from '../store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Invite from './Invite'
import Going from './Going'
import NotGoing from './NotGoing'

class App extends Component {

  render() {
    return (
    	<Provider store={store}>
    		<Router>
    			<div>
    				<Switch>
    					<Route path="/" component={Invite} />
    					<Route path="/going" component={Going} />
    					<Route path="/notgoing" component={NotGoing} />
    				</Switch>
    			</div>
    		</Router>
    	</Provider>
    )
  }
}

export default App
