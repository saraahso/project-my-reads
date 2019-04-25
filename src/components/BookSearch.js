import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import Notifications, {notify} from 'react-notify-toast';

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
              		if(books.length > 0) {
                      books.map(book => 
                      	this.props.books.filter((item) => 
                        	item.id === book.id).map((item) => 
                            	book.shelf = item.shelf
                      ))
                      this.setState((currentState) => ({
                          filteredBooks: books
                      }))
                    }
                    if(this.state.filteredBooks.error === 'empty query'){
                      this.setState({filteredBooks: []})
                      notify.show('We can\'t find your search.', "error" )
                    }
              
              	  
              	  console.log( books)
            	})
        }
    }

  

  render (){
    const { handleUpdateShelf } = this.props
	// eslint-disable-next-line
	const { books, shelf } = this.state
    return (
    	<div className="search-books">
      		<Notifications />
            <div className="search-books-bar form-group">
            	<Link className='close-search'
                      to='/'>Close
                  </Link>
              <div className="search-books-input-wrapper">
                
                <DebounceInput type="text" debounceTimeout={500} placeholder="Search by title or author" onChange={(e) => this.bookSearch(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results container">
				{(this.state.filteredBooks && this.state.filteredBooks.length > 0) &&
                  <div className="row mt-4 p-2 card-deck">
                    {this.state.filteredBooks.map((book) => (
                        <div className="col-xs-12 col-md-4" key={book.id}>
                            <Book 
                              book={book}
                              handleUpdateShelf={handleUpdateShelf}
                              />
                        </div>
                        ))}
                 </div> }

            </div>
          </div>
	)
  }
}
export default BookSearch