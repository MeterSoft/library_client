import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadBooks, booksSearch, loadBooksByCategory, createBook, updateBook, openBookModal, closeBookModal, deleteBook} from '../actions/bookActions'
import {bindActionCreators} from 'redux'
import Loader from '../components/loader/Loader'
import { Panel, Row, FormGroup, FormControl, Button } from 'react-bootstrap'
import BooksItem from '../components/books/booksItem'
import Form from '../components/books/form'
import {loadCategories} from '../actions/categoryActions'

class BooksPage extends Component {
  
  initialLoadBooks() {
    const { category_id } = this.props.params;

    category_id ? this.props.loadBooksByCategory(category_id) : this.props.loadBooks();
    this.props.loadCategories();
  }

  componentWillMount() {
    this.initialLoadBooks();
  }

  componentWillReceiveProps(nextProps) {
    const { pathname } = this.props.location;

    if (nextProps.location.pathname !== pathname) {
      this.props.params.category_id = null;
      this.initialLoadBooks();
    }
  }

  handleBooksSearch(event) {
    this.props.booksSearch(event.target.value);
  }

  handleBookCreate(params) {
    return this.props.createBook(params);
  }

  handleBookUpdate(params) {
    return this.props.updateBook(params);
  }

  handleBookDelete(params) {
    return this.props.deleteBook(params);
  }

  render() {
    const { books, categories, openBookModal, closeBookModal, bookModal } = this.props;

    return (

      <div>
        <Panel>
          <Button
            bsStyle="primary"
            bsSize="small"
            onClick={openBookModal}>
            Add book
          </Button>
          <Form bookModal={bookModal}
                closeBookModal={closeBookModal}
                createBook={this.handleBookCreate.bind(this)} 
                updateBook={this.handleBookUpdate.bind(this)} 
                updateBookList={this.initialLoadBooks.bind(this)} 
                categories={categories} 
                initialValues={bookModal.book} />
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
                  book={book}
                  openBookModal={openBookModal}
                  updateBookList={this.initialLoadBooks.bind(this)}
                  deleteBook={this.handleBookDelete.bind(this)} />
              )
          }
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { books, booksSearch, categories, bookModal } = state;
  
  return {
    books: {
      loading: books.loading,
      data: books.data.filter((book) => {
        return book.title.toLowerCase().indexOf(booksSearch.toLowerCase()) !== -1 
      }),
    },
    categories: categories,
    bookModal,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadBooks, booksSearch, loadBooksByCategory, createBook, updateBook, loadCategories, openBookModal, closeBookModal, deleteBook}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);