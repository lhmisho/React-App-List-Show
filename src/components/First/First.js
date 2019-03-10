import React, { Component } from 'react'

class First extends Component{
    render(){
        return(
            <div>
                <h1>Name : {this.props.name}</h1>
                <p>Job : {this.props.job}</p>
                <p>Email: {this.props.email}</p>
            </div>
        )
    }
}

export default First