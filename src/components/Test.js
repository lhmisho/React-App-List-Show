import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const Test = ({ match }) => {
    return (
        <div>
            <h1>test: {match.params.postId}</h1>
            <Link to='/'>Back</Link>
        </div>
    )
}

// class Test extends Component{
//     render(){
//         console.log(this.props)
//         return <h1>Hi am test</h1>
//     }
// }
export default Test;