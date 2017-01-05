import React, { Component } from 'react';

import {connect} from 'react-redux';
import {loadBooks, booksSearch, loadBooksByCategory, createBook} from '../../actions/bookActions';
import {bindActionCreators} from 'redux';
import Loader from '../loader/Loader';
import { Panel, Row, FormGroup, FormControl } from 'react-bootstrap';
import BooksItem from './booksItem';
import AddBook from './addBook';

class Book extends Component {
  
  componentDidMount() {
    const { category_id } = this.props.params;

    category_id ? this.props.loadBooksByCategory(category_id) : this.props.loadBooks();

  }

  handleBooksSearch(event) {
    this.props.booksSearch(event.target.value);
  }

  handleBookCreate(params) {
    const { category_id } = this.props.params;

    alert(this.props.createBook(category_id || 1, params));

    return this.props.createBook(category_id || 1, params);
  }

  render() {
    const { books, booksSearch } = this.props;

    return (


      <div>
        <Panel>
          <AddBook createBook={this.handleBookCreate.bind(this)} />
        </Panel>
        
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
  const { books, booksSearch } = state;
  
  return {
    books: books.filter((book) => {
      return book.title.toLowerCase().indexOf(booksSearch.toLowerCase()) !== -1 
    })
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadBooks, booksSearch, loadBooksByCategory, createBook}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);