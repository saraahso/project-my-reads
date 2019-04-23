import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Notifications, {notify} from 'react-notify-toast';

/* eslint-disable */
class Book extends Component {
  
  	state = {
      value: this.props.shelf
  	}

	static propTypes = {
        book: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired
    };
  
  	handleChange = (e) => {
      this.setState({ value:e.target.value})
      this.props.handleUpdateShelf( this.props.book, e.target.value)
      notify.show('The book is now at new shelf!', "success" )
    }

	render (){
        const { book } = this.props
		return (
         
			<div>
          		<Notifications />
				<div className="card p-1 mt-3 mb-3">
          			<div className="row">
          				<div className="col-12 col-md-5">
                      		<img className="mx-auto position-relative" src={book.imageLinks.thumbnail} />	
						</div>
						<div className="col-12 col-md-7">
                          <div className="book-shelf-changer bg-dark">
                              <select className="form-control" onChange={this.handleChange} defaultValue={book.shelf}>
                                  <option value="move" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                               </select>
                           </div>

                          <div className="mt-2">{book.title}</div>
                          <div className="text-secondary">{book.authors}</div>
						</div>
					</div>
				</div>
              </div>
		
        )
    }
}

export default Book