import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Notifications, {notify} from 'react-notify-toast';

/* eslint-disable */
class Book extends Component {
  
  	state = {
      value: this.props.shelf
  	}

	static propTypes = {
        book: PropTypes.object.isRequired
    };

  	handleChange = (e) => {
      this.setState({ value:e.target.value})
      this.props.handleUpdateShelf( this.props.book, e.target.value)
      notify.show('The book is now at new shelf!', "success" )
    }
	
	render (){
        const { book, shelf } = this.props
		
		return (
         
			<div>
          		<Notifications />
				<div className="p-1 mt-3 mb-3 card">
          			<div className="row">
          				<div className="col-12 col-lg-5">
                      		{book.imageLinks && book.imageLinks.thumbnail && 
          						<img src={book.imageLinks.thumbnail} alt="" className="img-fluid"/>}
						</div>
						<div className="col-12 col-lg-7 test" >
                          <div className="mt-2">{book.title}</div>
                          <div className="text-secondary">{book.authors}</div>

						</div>
						
                              <div className="book-shelf-changer bg-dark ml-auto">
                                <select className="form-control" onChange={this.handleChange} defaultValue={book.shelf ? book.shelf : 'none'}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                 </select>
                             </div>
							
					</div>
				</div>
              </div>
		
        )
    }
}

export default Book