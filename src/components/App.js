import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
// import Contact from './Contact';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import Test from './Test'
import PrivateRoute from './PrivateRoute' 
// import axios from 'axios'
// import PostForm from './PostForm/PostForm'
// import FormSubmit from './FormSubmit/FormSubmit'
class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <div className='container'>
                    {/* <PostForm /> */}
                    {/* <FormSubmit /> */}
                    <h2>React router</h2>
                    {/* <Route path='/' render={()=>{
                        return <h1>Hello happy routing</h1>
                    }}/> */}
                    <Nav/>
                    <Switch>
                        <Route path='/' exact render={() => {
                            return <Home name='Hossain Misho'/>
                        }} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/posts/:postId' component={Test} />
                    </Switch>
                </div>

            </BrowserRouter>

        );
    }
}


export default App;

// Route configuration
// route 
// url param    
// private route