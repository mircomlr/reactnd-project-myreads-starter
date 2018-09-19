import React from 'react'
import MainPage from './MainPage';
import SearchPage from './SearchPage'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

export default class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

switchShelf = (book, shelf) => {
  BooksAPI.update(book, shelf);

  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

render() {
// console.log(this.state.books);    
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage 
            books={this.state.books}
            switchShelf={this.switchShelf} 
          />
        )} />
        <Route exact path='/SearchPage' render={() => (
          <SearchPage 
            switchShelf={this.switchShelf}
        />
        )} />
      </div>
    )
  }
}


