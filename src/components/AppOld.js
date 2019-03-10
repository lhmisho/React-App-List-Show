import React, { Component } from 'react';
import './App.css';
import './First/First'
import First from './First/First';
import Counter from './Counter/Counter'
class App extends Component {

  state = {
    person:[
      {name:'Lokman Hossen', job:'Software Engineer', email:'lhmisho@gmail.com'},
      {name:'Hossen Lokman', job:'Dba administrator', email:'lokman@divine-it.net'},
      {name:'saiful islam',  job:'system engieer',    email:'saiful@divine-it.net'}
    ]
  }

  render() {
    return (
      <div className="App">

      {this.state.person.map((value, index)=>{
        return <First 
          key = {index}
          name = {value.name}
          job = {value.job}
          email = {value.email}
        />
      })}

        {/* <First name={this.state.person[0].name} job={this.state.person[0].job} email={this.state.person[0].email} /> */}
        {/* <First name='Hossen Lokman' job='Web developer' email='lokman@divine-it.net' />
        <First name='Saiful Islam' job='Marketing person' email='saifulchowdury@gmail.com' /> */}

        <Counter />
      </div>
    );
  }
}

export default App;
