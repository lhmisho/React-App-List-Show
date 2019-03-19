import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Home extends Component{
    render(){
        return (
            <div>
                <h1>I am Home: {this.props.name}</h1>
                <Link to='/posts/post-1'>post-1</Link>
                <Link to='/posts/post-2'>post-2</Link>
                <Link to='/posts/post-5'>post-5</Link>
                <Link to='/posts/post-101'>post-101</Link>
            </div>
        )
    }
}

export default Home;