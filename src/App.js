import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
	state = {
   		books: [],
    	shelves: [
          { key: 'currentlyReading', title: 'Currently Reading' },
          { key: 'wantToRead', title: 'Want to Read' },
          { key: 'read', title: 'Read' }
  		],
  }

	componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({
            books: books
        });
      })
    }

 	handleUpdateShelf = (book, shelf) => {
    	book.shelf = shelf
      	BooksAPI.update(book, shelf)
      		.then( updated => (BooksAPI.getAll().then((books) => {
        		this.setState({
                  books: books
               	});
        })))
    }

	


  render() {
    console.log(this.state.books)
    return (
    
      <div className="app">
        <Route exact path="/" render={() => (
    		<BookList 
      			books={this.state.books}
				shelves={this.state.shelves}
      			handleUpdateShelf={ this.handleUpdateShelf }/>
    	)} />
		<Route path="/search" render={({history}) => (
        	<BookSearch 
          		books={this.state.books}
				handleUpdateShelf={ this.handleUpdateShelf }/>
        )} />
		
		<div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
      </div>
    )
  }
}

export default BooksApp
