import React, { Component } from 'react';

import {connect} from 'react-redux';
import {loadBooks, booksSearch, loadBooksByCategory, createBook} from '../actions/bookActions';
import {bindActionCreators} from 'redux';
import Loader from '../components/loader/Loader';
import { Panel, Row, FormGroup, FormControl } from 'react-bootstrap';
import BooksItem from '../components/books/booksItem';
import Form from '../components/books/form';

class BooksPage extends Component {
  
  initialLoadBooks() {
    const { category_id } = this.props.params;

    category_id ? this.props.loadBooksByCategory(category_id) : this.props.loadBooks();
  }

  componentWillMount() {
    this.initialLoadBooks();
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = this.props.location;

    console.log(nextProps);

    if (nextProps.location.pathname !== pathname) {
      this.props.params.category_id = null;
      this.initialLoadBooks();
    }
  }

  handleBooksSearch(event) {
    this.props.booksSearch(event.target.value);
  }

  handleBookCreate(params) {
    const { category_id } = this.props.params;

    return this.props.createBook(category_id || 1, params);
  }

  render() {
    const { books } = this.props;

    return (

      <div>
        <Panel>
          <Form createBook={this.handleBookCreate.bind(this)} updateBookList={this.initialLoadBooks.bind(this)} />
        </Panel>
        
        <form>
          <FormGroup>
            <FormControl type="text"  placeholder="Search" onChange={this.handleBooksSearch.bind(this)}></FormControl>
          </FormGroup>
        </form>
        <Row>
          {
            books.loading ?
              <Loader /> :
              books.data.map((book) => 
                <BooksItem 
                  key={book.id} 
                  id={book.id} 
                  title={book.title} 
                  description={book.description} 
                  file_url={book.file_url} />
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
    books: {
      loading: books.loading,
      data: books.data.filter((book) => {
        return book.title.toLowerCase().indexOf(booksSearch.toLowerCase()) !== -1 
      }),
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadBooks, booksSearch, loadBooksByCategory, createBook}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);