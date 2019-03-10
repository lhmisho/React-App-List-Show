import React, { Component } from 'react';
import './App.css';
import './First/First'
import Books from './Books/Books'
// import First from './First/First';
// import Counter from './Counter/Counter'
// import Example from './Example'

class App extends Component {

  state = {
    books: [
      {
        id:1,
        name : 'JavaScripts',
        price: 10
      },
      {
        id:2,
        name: 'Python',
        price: 20
      },
      {
        id:3,
        name : 'PHP',
        price: 10
      },
      {
        id:4,
        name: 'Java',
        price: 20
      }
    ]
  }

  deleteHandler = (id) =>{
    let newBook = this.state.books.filter(book => book.id !== id)
    this.setState({
      books: newBook
    })
  }

  changeHandler = (name, id) =>{
    let newBook = this.state.books.map(book => {
      if(id === book.id){
        return{
          ...book,
          name
        }
      }

      return book
    })

    this.setState({
      books:newBook
    })
  }

  render() {
    
    return (
      <div className='App'>
        <Books 
          changeHandler={this.changeHandler.bind(this)}
          deleteHandler={this.deleteHandler.bind(this)} 
          books={this.state.books} />
      </div>
    );
  }
}

export default App;
