import React, { Component } from 'react';

import {connect} from 'react-redux';
import {loadCategories, categorySearch} from '../actions/categoryActions';
import {bindActionCreators} from 'redux';
import Loader from '../components/loader/Loader'
import { ListGroup, FormGroup, FormControl } from 'react-bootstrap';
import CategoryItem from '../components/categories/categoryItem';

class CategoriesPage extends Component {
  
  componentDidMount() {
    this.props.loadCategories();
  }

  handleCategorySearch(event) {
    this.props.categorySearch(event.target.value);
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <form>
          <FormGroup>
            <FormControl type="text"  placeholder="Search" onChange={this.handleCategorySearch.bind(this)}></FormControl>
          </FormGroup>
        </form>
        <ListGroup>
          {
            categories.loading ?
              <Loader /> :
              categories.data.map((category) => 
                <CategoryItem 
                  key={category.id} 
                  id={category.id} 
                  title={category.title} 
                  description={category.description}
                  books_count={category.books_count} />
              )
          }
        </ListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { categories, categorySearch } = state;
  
  return {
    categories: {
      loading: categories.loading,
      data: categories.data.filter((category) => {
        return category.title.toLowerCase().indexOf(categorySearch.toLowerCase()) !== -1 
      })
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadCategories, categorySearch}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPage);