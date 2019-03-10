import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import PostForm from './PostForm/PostForm'
class App extends Component {
  render() {
    
        return(
            <div className="">
                <div className="row">
                    <div className='col-sm-8 offset-sm-2'>
                        <PostForm />
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
