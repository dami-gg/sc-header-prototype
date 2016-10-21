import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Applications.scss';
import Menu from '../menu/Menu';
import {changeCurrentProductId, changeCurrentApplicationId} from '../../actions';

class Applications extends Component {
  getCurrentProduct() {
    return this.props.products.filter((product) => {
      return product.id === this.props.selectedProductId;
    })[0];
  }

  getCurrentProductApplications() {
    return this.getCurrentProduct() ? this.getCurrentProduct().applications : [];
  }

  navigateToApplication(clickedItem, event) {
    event.preventDefault();

    this.props.changeCurrentApplicationId(clickedItem.id);

    // TODO This should be fetched from a BE endpoint which returns the ProductId to which belongs a given ApplicationId
    let newProductId = this.props.products.filter((product) => {
      return product.applications.filter((application) => {
        return application.id === clickedItem.id;
      }).length > 0;
    })[0].id;
    this.props.changeCurrentProductId(newProductId);
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__applications">
          <nav className="navigation--menu">
            <Menu
                menuItems={this.getCurrentProductApplications()}
                onClickAction={this.navigateToApplication.bind(this)}
                highlightedItemId={this.props.currentApplicationId}
            />
          </nav>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProductId,
  currentApplicationId: state.navigation.currentApplicationId
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentProductId: (productId) => {
      dispatch(changeCurrentProductId(productId));
    },

    changeCurrentApplicationId: (applicationId) => {
      dispatch(changeCurrentApplicationId(applicationId));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Applications);
