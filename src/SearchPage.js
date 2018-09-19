import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';

export default class SearchPage extends Component {
  state = {
    query:'',
    displayedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.updateDisplayedBooks(query);
  }

  updateDisplayedBooks = (query) => {
    if (query) {
    BooksAPI.search(query).then((displayedBooks) => {
      if (displayedBooks.error === "empty query") {
        {/* console.log(displayedBooks); */}
        this.setState({ displayedBooks: [] });
      } else {
        this.setState({ displayedBooks });
      }  
    })
    } else {
      this.setState({ displayedBooks: [] });
    }
  }    

  render() {
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event)=> this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
                {this.state.displayedBooks.map(displayedBook => (
                  <li key={displayedBook.id}>
                    <Book
                      book={displayedBook}
                      switchShelf={this.props.switchShelf}
                      currentShelf="none" 
                    />
                  </li>
                ))}
            </div>
          </div> 
        );
    }
}
  