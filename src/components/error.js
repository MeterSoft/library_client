import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class AlertError extends Component {
  
  render() {

    const { error } = this.props;

    return(
      <div>
        { 
          Array.isArray(error) ?
            error.map((message) => {
              return <Alert bsStyle="danger">{message}</Alert>
            }) :
            <Alert bsStyle="danger">{error}</Alert>
        }
      </div>
    );
  }
}

export default AlertError;