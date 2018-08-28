import React, { Component } from 'react'
import {getNotGoing} from '../actions/inviteActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class NotGoing extends Component {

    componentDidMount() {
        getNotGoing()
    }

    render() {
        return (
            <div>
                <h1>Not Going</h1>
                <div>
                    <div className="responded">
                        {this.props.notgoing.map(user => (
                            <div key={user.id} className="usersNotGoing">
                                <img src={user.picture} alt='' />
                                <p><span className="bold">Name:</span> <span className="capitalize">{user.name}</span></p>
                                <p><span className="bold">Phone:</span> {user.phone}</p>
                                <p><span className="bold">Email:</span> {user.email}</p>
                            </div>
                        ))}
                    </div>
                    <div className="return">
                        <Link to="/"><p><span className="uppercase">+ Add Invitees</span></p></Link>
                    </div>
                </div>
            </div>
        )
    }
}

NotGoing.defaultProps = {
  notgoing:[]
}

function mapStateToProps(appState) {
  return {notgoing:appState.notgoing}
}

export default connect(mapStateToProps)(NotGoing)
