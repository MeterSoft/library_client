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

    let books_count = 0;
    categories.data.map((category) => { books_count += category.books_count });
    const dataPie = categories.data.map((category) => { return category.books_count ? { name: category.title, y: books_count * 100 / category.books_count } : null });

    var configPie = {
      chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
      title: { text: 'Favorite categories' },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      color: 'black'
                  }
              }
          }
      },
      series: [{
          name: 'Brands',
          data: dataPie
      }]
    };

    return(
      <div>
        <ReactHighcharts config={config}></ReactHighcharts>
        <ReactHighcharts config={configPie}></ReactHighcharts>
      </div>
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