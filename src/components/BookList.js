import React, { Component } from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';

class BookList extends Component {

  static propTypes = {
        shelves: PropTypes.array.isRequired,
    	books: PropTypes.array.isRequired,
    	handleUpdateShelf: PropTypes.func.isRequired
    };

  render (){
    const { books, shelves, handleUpdateShelf } = this.props
    return (
      <div className="container-fluid p-0">
            <div className="navbar navbar-dark bg-dark">
              <a className="navbar-brand text-light" href="#"><FontAwesomeIcon icon="book" /> MyReads</a>
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
			<div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
            
          </div>
    )
  }
}

export default BookList