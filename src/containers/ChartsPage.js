import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadCategories} from '../actions/categoryActions'
import {bindActionCreators} from 'redux'
import ReactHighcharts from 'react-highcharts'

class BooksPage extends Component {
  
  initialLoad() {
    this.props.loadCategories();
  }

  componentWillMount() {
    this.initialLoad();
  }

  render() {
    const { books, categories } = this.props;

    const xAxis = categories.data.map((category) => category.title);
    const data = categories.data.map((category) => category.books_count);

    var config = {
      chart: {
          type: 'column',
      },
      title: { text: 'Favorite categories' },
      xAxis: {
        categories: xAxis
      },
      yAxis: {
        min: 0,
        title: { text: 'Count' }
      },
      series: [{
        data: data
      }]
    };

    return(
      <ReactHighcharts config={config}></ReactHighcharts>
    );
  }
}

const mapStateToProps = (state) => {
  const { books, categories } = state;
  
  return {
    categories: categories,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadCategories}, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksPage);