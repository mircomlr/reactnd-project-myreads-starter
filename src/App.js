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
  /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  render() {
// console.log(this.state.books);    
    return (
      <div className="app">
        <MainPage books={this.state.books} />
      </div>
    )
  }
}


