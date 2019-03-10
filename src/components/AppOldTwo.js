import React, { Component } from 'react';
import './App.css';
import './First/First'
// import First from './First/First';
// import Counter from './Counter/Counter'
import Example from './Example'

class App extends Component {

  state = {
    name: '',
    value: ''
  }

  clickHandler = (event) =>{
    this.setState({
      value:document.getElementById("inp").value
    })
  }
  inputHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <input id="inp" onChange={this.inputHandler} value={this.state.name} type="text" placeholder="Your name"/>
        <button onClick={this.clickHandler}>
          click me
        </button>
        {this.state.name ? <p>I'm : {this.state.name}</p> : ''}
        <p>{this.state.value}</p>
        <Example name="misho"/>
      </div>
    );
  }
}

export default App;
