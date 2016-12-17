import React, { Component } from 'react';

import {connect} from 'react-redux';
import {loadCategories} from '../../actions/CategoryActions';
import {bindActionCreators} from 'redux';
import Loader from '../loader/Loader'
import { ListGroup } from 'react-bootstrap';
import CategoryItem from './categoryItem'

class Category extends Component {
  
  componentWillMount() {
    this.props.loadCategories();
  }

  render() {

    return (
      <ListGroup>
        {
          this.props.categories.length > 0 ?
            this.props.categories.map((category) => 
              <CategoryItem key={category.id} id={category.id} title={category.title} description={category.description}/>) :
            <Loader />
        }
      </ListGroup>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadCategories}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);