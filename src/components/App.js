import React, { Component } from 'react';
import './App.css';
// import axios from 'axios'
import PostForm from './PostForm/PostForm'
import FormSubmit from './FormSubmit/FormSubmit'
class App extends Component {
  render() {
    
        return(
            <div className="">
                <div className="row">
                    <div className='col-sm-8 offset-sm-2'>
                        {/* <PostForm /> */}
                        <FormSubmit />
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
