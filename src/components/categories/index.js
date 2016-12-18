import React, { Component } from 'react';

import {connect} from 'react-redux';
import {loadCategories, categorySearch} from '../../actions/categoryActions';
import {bindActionCreators} from 'redux';
import Loader from '../loader/Loader'
import { ListGroup, FormGroup, FormControl } from 'react-bootstrap';
import CategoryItem from './categoryItem'

class Category extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     categorySearch: ''
  //   }

  //   this.handleCategorySearch = this.handleCategorySearch.bind(this);
  // }
  
  componentWillMount() {
    this.props.loadCategories();
  }

  handleCategorySearch(event) {
    console.log(event.target.value);
    this.props.categorySearch(event.target.value);
  }

  getCagegories() {
  }

  render() {
    const { categories, categorySearch } = this.props;

    return (

      <div>
        <form>
          <FormGroup>
            <FormControl type="text"  placeholder="Search" onChange={this.handleCategorySearch.bind(this)}></FormControl>
          </FormGroup>
        </form>
        <ListGroup>
          {
            !categories.length && categorySearch == "" ?
              <Loader /> :
              categories.map((category) => 
                <CategoryItem 
                  key={category.id} 
                  id={category.id} 
                  title={category.title} 
                  description={category.description}
                  books_count={category.books_count}
                   />)
          }
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { categories, categorySearch } = state;

  console.log(categorySearch);
  console.log(categorySearch.toLowerCase());
  
  return {
    categories: categories.filter((category) => {
      return category.title.toLowerCase().indexOf(categorySearch.toLowerCase()) !== -1 
    })
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadCategories, categorySearch}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);