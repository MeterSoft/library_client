import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

export default function(Component) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        browserHistory.push('/login')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        browserHistory.push('/')
      }
    }

    render() {
      return(
        <Component {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  return connect(mapStateToProps)(Authenticate);
}