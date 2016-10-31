import React, {Component} from 'react';
import {connect} from 'react-redux';

import './ServiceProvider.scss';
import analyticsPlaceholder from '../../assets/img/analytics-placeholder.png';

class ServiceProvider extends Component {
  render() {
    return (
        <div className="service-provider">
          <h1 className="dc-h1 centered">
            {this.props.currentProductName}: {this.props.currentApplicationName} application
          </h1>
          {
            this.props.currentApplicationName === 'Analytics' && this.props.currentBusinessPartner &&
            <img src={analyticsPlaceholder} role="presentation" />
          }
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentProductName: state.navigation.currentProduct
      ? state.navigation.currentProduct.name : 'Solution Center',
  currentApplicationName: state.navigation.currentApplication
      ? state.navigation.currentApplication.name : 'Users',
  currentBusinessPartner: state.navigation.currentBusinessPartner
});

export default connect(
    mapStateToProps
)(ServiceProvider);
