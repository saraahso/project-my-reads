import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  
	render (){
      const { shelf, books, handleUpdateShelf} = this.props
		return (
          	<div className="row mt-4">
          		<div className="col-12">
          			<h3 className="text-info">{shelf.title}</h3>
					<hr/>
				</div>
              	
                  <div className="row mt-4 p-2 card-deck">
					{books.map((book) => (
                    <div className="col-xs-12 col-md-4" key={book.id}>
                        <Book 
                          book={book}
						  handleUpdateShelf={ handleUpdateShelf }
                          />
					</div>
					))}
                  </div>

          </div>
		)
	}
}

export default BookShelf