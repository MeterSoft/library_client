import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { ListGroupItem, Badge } from 'react-bootstrap';

class CategoryItem extends Component {

  handleSelectCategory() {
    const url = `/categories/${this.props.id}/books`;

    browserHistory.push(url);
  }

  render() {


    return (
      <ListGroupItem onClick={this.handleSelectCategory.bind(this)}>
        { this.props.title }
        <Badge>
          { this.props.books_count }
        </Badge>
      </ListGroupItem>
    );
  }
}

export default CategoryItem;