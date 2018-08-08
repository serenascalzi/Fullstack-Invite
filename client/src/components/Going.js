import React, { Component } from 'react'
import {getGoing} from '../actions/inviteActions'
import {connect} from 'react-redux'

class Going extends Component {

    componentDidMount() {
        getGoing()
    }

    render() {
        return (
            <div>
                <h1>Going</h1>
                <div className="responded">
                    {this.props.going.map(user => (
                        <div key={user.id} className="usersGoing">
                            <img src={user.picture} alt='' />
                            <p><span className="bold">Name:</span> <span className="capitalize">{user.name}</span></p>
                            <p><span className="bold">Phone:</span> {user.phone}</p>
                            <p><span className="bold">Email:</span> {user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

Going.defaultProps = {
  going:[]
}

function mapStateToProps(appState) {
  return {going:appState.going}
}

export default connect(mapStateToProps)(Going)
