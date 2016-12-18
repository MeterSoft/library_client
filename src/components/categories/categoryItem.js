import React, { Component } from 'react';

import { ListGroupItem, Badge } from 'react-bootstrap';

class CategoryItem extends Component {

  render() {

    return (
      <ListGroupItem href="#link">
        { this.props.title }
        <Badge>
          { this.props.books_count }
        </Badge>
      </ListGroupItem>
    );
  }
}

export default CategoryItem;