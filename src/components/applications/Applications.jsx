import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Applications.scss';
import Menu from '../menu/Menu';
import {changeCurrentProduct, changeCurrentApplication} from '../../actions';

class Applications extends Component {
  getCurrentProduct() {
    return this.props.products.filter((product) => {
      return product.id === this.props.selectedProductId;
    })[0];
  }

  getCurrentProductApplications() {
    return this.getCurrentProduct() ? this.getCurrentProduct().applications : [];
  }

  navigateToApplication(clickedItem) {
    // TODO This should be fetched from a BE endpoint which returns the ProductId to which belongs a given ApplicationId
    let result, currentApplication = '', currentProduct;
    currentProduct = this.props.products.filter((product) => {
      result = product.applications.filter((application) => {
        return application.id === clickedItem.id;
      });

      if (result.length > 0) {
        currentApplication = result[0];
        return true;
      }

      return false;
    })[0];

    this.props.changeCurrentProduct(currentProduct);
    this.props.changeCurrentApplication(currentApplication);
  }

  render() {
    return (
        <div className="navigation dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <div className="dc-column dc-column--shrink sc-header__applications">
            <nav className="navigation--menu">
              <Menu
                  menuItems={this.getCurrentProductApplications()}
                  onClickAction={this.navigateToApplication.bind(this)}
                  highlightedItemId={this.props.currentApplicationId}
                  highlightedClass={'highlighted'}
              />
            </nav>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
  currentApplicationId: state.navigation.currentApplication && state.navigation.currentApplication.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentProduct: (product) => {
      dispatch(changeCurrentProduct(product));
    },

    changeCurrentApplication: (application) => {
      dispatch(changeCurrentApplication(application));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Applications);
