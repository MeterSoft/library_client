import React, { Component } from 'react';

import { ListGroupItem } from 'react-bootstrap';

class CategoryItem extends Component {

  render() {

    return (
      <ListGroupItem href="#link">
        { this.props.title }
      </ListGroupItem>
    );
  }
}

export default CategoryItem;