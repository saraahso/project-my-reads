import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input';
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types';

class BookSearch extends Component {
  
  constructor(){
        super();
        this.state = {
            books: [],
            filteredBooks: []
        };
    };
  
  static propTypes = {
        handleUpdateShelf: PropTypes.func.isRequired,
        shelves: PropTypes.array.isRequired
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
            <div className="search-books-bar form-group">
            	<Link className='close-search'
                      to='/'>Close
                  </Link>
              <div className="search-books-input-wrapper">
                
                <DebounceInput type="text" debounceTimeout={500} placeholder="Search by title or author" onChange={(e) => this.bookSearch(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results container">
              <div className="col-12 mt-4 card-deck">
				{this.state.filteredBooks.map((book) => (
                    <div className="col-12 col-md-4 float-left" key={book.id}>
                        <Book 
                          book={book}
						  handleUpdateShelf={ handleUpdateShelf }
                          />
					</div>
					))}
			 </div>
            </div>
          </div>
	)
  }
}
export default BookSearch