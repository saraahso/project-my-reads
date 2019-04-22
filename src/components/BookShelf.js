import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  
  	constructor(){
  		super();
  	}
	render (){
      const { shelf, books, handleUpdateShelf} = this.props
		return (
          	<div className="row mt-4">
          		<div className="col-12">
          			<h3 className="text-info">{shelf.title}</h3>
					<hr/>
				</div>
              	
                  <div className="col-12 mt-4 card-deck">
					{books.map((book) => (
                    <div className="col-12 col-md-4 float-left" key={book.id}>
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