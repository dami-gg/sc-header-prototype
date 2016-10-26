import React, {Component} from 'react';
import {connect} from 'react-redux';

import './ServiceProvider.scss';

class ServiceProvider extends Component {
  render() {
    return (
        <h1 className="dc-h1 centered">
          {this.props.currentProductName}: {this.props.currentApplicationName} application
        </h1>
    )
  }
}

const mapStateToProps = (state) => ({
  currentProductName: state.navigation.currentProduct
      ? state.navigation.currentProduct.name : 'Solution Center',
  currentApplicationName: state.navigation.currentApplication
      ? state.navigation.currentApplication.name : 'Users'
});

export default connect(
    mapStateToProps
)(ServiceProvider);
