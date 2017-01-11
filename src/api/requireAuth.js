import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Authenticate extends Component {
  componentWillMount() {
    if (!this.props.isAuthenticated) {
      browserHistory.push('/login')
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.isAuthenticated) {
      browserHistory.push('/login')
    }
  }

  render() {
    if (this.props.isAuthenticated) {
      return this.props.children
    } else {
      return null
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Authenticate);