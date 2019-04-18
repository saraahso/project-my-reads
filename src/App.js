import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
	state = {
   		books: []
  	}

	componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
          books: books
      });
    })
  }

  render() {
    console.log(this.state.books)
    return (
    
      <div className="app">
        <Route exact path="/" render={() => (
    		<BookList books={this.state.books} />
    	)} />
		<Route path="/search" render={({history}) => (
        	<BookSearch />
        )} />
		
		<div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
      </div>
    )
  }
}

export default BooksApp
