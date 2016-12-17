import React, { Component } from 'react';

import {connect} from 'react-redux';
import {loadVideos} from '../actions/VideoActions';
import {bindActionCreators} from 'redux';

class Video extends Component {
  
  componentWillMount() {
    console.log(this.props);
    this.props.loadVideos();
  }


  render() {

    return (
      <div>
        Video
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state');
  console.log(state);
  return {
    videos: state.videos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadVideos}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);