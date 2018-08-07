import React, { Component } from 'react'
import {connect} from 'react-redux'

class Invite extends Component {

	render() {
		return (
			<div>
				<ul>
					{this.props.users.map((user, i) => (
						<li key={'user' + i}>{user.first.name}</li>
					))}
				</ul>
			</div>
		)
	}
}

Invite.defaultProps = {
  users:[]
}

function mapStateToProps(appState) {
  return {users:appState.users}
}

export default connect(mapStateToProps)(Invite)
