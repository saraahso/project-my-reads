import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookList extends Component {

  render (){
    const { books, shelves, handleUpdateShelf } = this.props
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
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

            
          </div>
    )
  }
}

export default BookList