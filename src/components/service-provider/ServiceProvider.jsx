import React, {Component} from 'react';
import {connect} from 'react-redux';

import './ServiceProvider.scss';

class ServiceProvider extends Component {
  render() {
    let productName = 'Solution Center', applicationName = 'Users', filteredValues;

    if (this.props.currentProductId && this.props.currentApplicationId) {
      filteredValues = this.props.products.filter((product) => {
        filteredValues = product.applications.filter((application) => {
          return application.id === this.props.currentApplicationId;
        });

        if (filteredValues.length > 0) {
          applicationName = filteredValues[0].name;
        }

        return !!filteredValues;
      });

      if (filteredValues.length > 0) {
        productName = filteredValues[0].name;
      }
    }

    return (
        <h1 className="dc-h1 centered">
          {productName}: {applicationName} application
        </h1>
    )
  }
}

const mapStateToProps = (state) => ({
  currentProductId: state.navigation.currentProductId,
  currentApplicationId: state.navigation.currentApplicationId
});

export default connect(
    mapStateToProps
)(ServiceProvider);
