import React, { Component } from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class BookList extends Component {

  render (){
    const { books, shelves, handleUpdateShelf } = this.props
    return (
      <div className="container-fluid p-0">
            <div className="navbar navbar-light bg-light">
              <a className="navbar-brand text-dark" href="#"><FontAwesomeIcon icon="book" /> MyReads</a>
            </div>

            <div className="container">
      			{shelves.map((shelf) => (
      				<div key={shelf.key}>
                      <BookShelf 
                          shelf={shelf}
                          books={books.filter( (book) => book.shelf === shelf.key )}
						  handleUpdateShelf={ handleUpdateShelf }
                      />
					</div>
				))}
     		</div>
			<div className="">
              <Link to="/search">Add a book <FontAwesomeIcon icon="plus-circle" /></Link>
            </div>
            
          </div>
    )
  }
}

export default BookList