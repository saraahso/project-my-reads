import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookSearch extends Component {
  
  constructor(){
        super();
        this.state = {
            books: [],
            filteredBooks: []
        };
    };


  bookSearch = (query) => {
    	if (query){
        	BooksAPI.search(query)
          		.then((books) => {
            		this.setState((currentState) => ({
                    	filteredBooks: books
                    }))
            	})
        } else{
          	this.setState({filteredBooks: []})
        }
    console.log(this.state.filteredBooks)
    }


  render (){
    const { shelves, handleUpdateShelf} = this.props
	const { books } = this.state

    return (
    	<div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" onChange={(e) => this.bookSearch(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
				{this.state.filteredBooks.map((book) => (
                    <li key={book.id}>
                        <Book 
                          book={book}
						  handleUpdateShelf={ handleUpdateShelf }
                          />
					</li>
					))}
			 </ol>
            </div>
          </div>
	)
  }
}
export default BookSearch