import React, { Component } from 'react';

import {connect} from 'react-redux';
import {loadBooks, booksSearch, loadBooksByCategory} from '../../actions/bookActions';
import {bindActionCreators} from 'redux';
import Loader from '../loader/Loader'
import { Row, FormGroup, FormControl } from 'react-bootstrap';
import BooksItem from './booksItem';

class Book extends Component {
  
  componentWillMount() {
    const { category_id } = this.props.params;
    
    category_id ? this.props.loadBooksByCategory(category_id) : this.props.loadBooks();
  }

  handleBooksSearch(event) {
    this.props.booksSearch(event.target.value);
  }

  render() {
    const { books, booksSearch } = this.props;

    return (

      <div>
        <form>
          <FormGroup>
            <FormControl type="text"  placeholder="Search" onChange={this.handleBooksSearch.bind(this)}></FormControl>
          </FormGroup>
        </form>
        <Row>
          {
            !books.length && booksSearch === "" ?
              <Loader /> :
              books.map((book) => 
                <BooksItem 
                  key={book.id} 
                  id={book.id} 
                  title={book.title} 
                  description={book.description} 
                  file={book.file} />
              )
          }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { books, booksSearch } = state;
  
  return {
    books: books.filter((book) => {
      return book.title.toLowerCase().indexOf(booksSearch.toLowerCase()) !== -1 
    })
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadBooks, booksSearch, loadBooksByCategory}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);