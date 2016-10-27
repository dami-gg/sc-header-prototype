import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Applications.scss';
import Menu from '../menu/Menu';
import {
    changeCurrentProduct, changeCurrentApplication, showBusinessPartnerMenu, hideBusinessPartnerMenu,
    updateAccessibleBusinessPartners, updateLastAccessedBusinessPartners, resetCurrentBusinessPartner
} from '../../actions';

class Applications extends Component {
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

  getCurrentProduct() {
    return this.props.products.filter((product) => {
      return product.id === this.props.selectedProductId;
    })[0];
  }

  getCurrentProductApplications() {
    return this.getCurrentProduct() ? this.getCurrentProduct().applications : [];
  }

  navigateToApplication(clickedItem) {
    this.props.hideBusinessPartnerMenu();

    // TODO This should be fetched from a BE endpoint which returns the Product to which a given Application belongs
    let result, nextApplication = '', nextProduct;
    nextProduct = this.props.products.filter((product) => {
      result = product.applications.filter((application) => {
        return application.id === clickedItem.id;
      });

      if (result.length > 0) {
        nextApplication = result[0];
        return true;
      }

      return false;
    })[0];

    this.props.changeCurrentProduct(nextProduct);
    this.props.changeCurrentApplication(nextApplication);

    this.props.updateAccessibleBusinessPartners(this.getAccessibleBusinessPartnersInApplication(nextApplication));
    this.props.updateLastAccessedBusinessPartners(this.getLastAccessedBusinessPartnersInApplication(nextApplication));

    // TODO This following code might need to be moved to the constructor of the Header component whenever routing comes
    // into place and it will be possible to initialize the header already from a service provider and not from the Solution Center

    // If when navigating to an application there is no current business partner or if there is but its types are not
    // among the types managed by that application we show the business partner menu
    if (!this.isValidBusinessPartnerForApplication(nextApplication, this.props.currentBusinessPartner)) {
      // TODO It must also check if the user has access to that concrete business partner which is carried over in the new application
      this.props.resetCurrentBusinessPartner();
      this.props.showBusinessPartnerMenu();
    }
  }

  getAccessibleBusinessPartnersInApplication(application) {
    if (!application) {
      return [];
    }

    return this.props.userBusinessPartners.filter((businessPartner) => {
      return this.isValidBusinessPartnerForApplication(application, businessPartner);
    });
  }

  getLastAccessedBusinessPartnersInApplication(application) {
    // TODO This will be fetched from a backend endpoint
    return this.getAccessibleBusinessPartnersInApplication(application).slice(0, 10);
  }

  isValidBusinessPartnerForApplication(application, businessPartner) {
    // TODO This method will also need to check if the businessPartner has access to that application even if the type is valid
    if (!application || !businessPartner) {
      return false;
    }

    return businessPartner.types.filter((type) => {
          return application.businessPartnerTypes.includes(type);
        }).length > 0;
  }
}

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
  currentApplicationId: state.navigation.currentApplication && state.navigation.currentApplication.id,
  currentBusinessPartner: state.navigation.currentBusinessPartner
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentProduct: (product) => {
      dispatch(changeCurrentProduct(product));
    },

    changeCurrentApplication: (application) => {
      dispatch(changeCurrentApplication(application));
    },

    showBusinessPartnerMenu: () => {
      dispatch(showBusinessPartnerMenu());
    },

    hideBusinessPartnerMenu: () => {
      dispatch(hideBusinessPartnerMenu());
    },

    updateAccessibleBusinessPartners: (accessibleBusinessPartners) => {
      dispatch(updateAccessibleBusinessPartners(accessibleBusinessPartners));
    },

    updateLastAccessedBusinessPartners: (lastAccessedBusinessPartners) => {
      dispatch(updateLastAccessedBusinessPartners(lastAccessedBusinessPartners));
    },

    resetCurrentBusinessPartner: () => {
      dispatch(resetCurrentBusinessPartner());
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Applications);
