import React, { Component } from 'react'
import {getUsers, updateStatus} from '../actions/inviteActions'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Invite extends Component {

    componentDidMount() {
        getUsers()
    }

    going = (e) => {
        updateStatus(e.target.value, 'going')
    }

    notgoing = (e) => {
        updateStatus(e.target.value, 'notgoing')
    }

    render() {
        return (
            <div>
                <h1>Invite</h1>
                <div>
                    <div className="status">
                        <Link to="/going"><p><span className="uppercase">Going:</span> {this.props.going.length}</p></Link>
                        <Link to="/notgoing"><p><span className="uppercase">Not Going:</span> {this.props.notgoing.length}</p></Link>
                    </div>
                    <div className="invited">
                        {this.props.users.map(user => (
                            <div key={user.id}>
                                <img src={user.picture} alt='' />
                                <p><span className="bold">Name:</span> <span className="capitalize">{user.name}</span></p>
                                <p><span className="bold">Phone:</span> {user.phone}</p>
                                <p><span className="bold">Email:</span> {user.email}</p>
                                <div className="response">
                                    <button className="goingResponse" onClick={this.going} value={user.id}>&#10004;</button>
                                    <button className="notgoingResponse" onClick={this.notgoing} value={user.id}>&#10008;</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

Invite.defaultProps = {
    users:[],
    going:[],
    notgoing:[]
}

function mapStateToProps(appState) {
    return {
        users:appState.users,
        going:appState.going,
        notgoing:appState.notgoing
    }
}

export default connect(mapStateToProps)(Invite)
