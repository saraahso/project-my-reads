import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import NotFound from './NotFound';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './App.css'

library.add(faBook)

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
      		.then(()  => {
        		this.setState({books: this.state.books.filter((item) => item.id !== book.id).concat([book])})
        })
    }

  render() {
    return (
    
      <div className="app">
       <BrowserRouter>
			<Switch>
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
				<Route path="*" component={NotFound} />
			</Switch>
		</BrowserRouter>
	   </div>
    )
  }
}

export default BooksApp
