import React, {Component} from 'react';
import {connect} from 'react-redux';

import './BusinessPartnerMenu.scss';
import {changeCurrentBusinessPartner, toggleBusinessPartnerMenu, updateBusinessPartnerSearchResults} from '../../actions';
import Search from '../search/Search';
import * as businessPartnerTypes from '../../constants/BusinessPartnerTypes';

class BusinessPartnerMenu extends Component {
  getSearchableItems() {
    switch (this.props.currentApplication.businessPartnerType) {
      case businessPartnerTypes.BRAND:
        return this.props.userBrands;

      case businessPartnerTypes.MERCHANT:
        return this.props.userMerchants;

      case businessPartnerTypes.SUPPLIER:
        return this.props.userSuppliers;

      default:
        return [];
    }
  }

  getLastAccessedItems() {
    switch (this.props.currentApplication.businessPartnerType) {
      case businessPartnerTypes.BRAND:
        return this.props.lastAccessedBrands;

      case businessPartnerTypes.MERCHANT:
        return this.props.lastAccessedMerchants;

      case businessPartnerTypes.SUPPLIER:
        return this.props.lastAccessedSuppliers;

      default:
        return [];
    }
  }

  selectBusinessPartner(businessPartner) {
    this.props.changeCurrentBusinessPartner(businessPartner);
    this.props.toggleBusinessPartnerMenu();
    this.props.updateBusinessPartnerSearchResults([]);
  }

  render() {
    let lastAccessedNodes = this.getLastAccessedItems().map((item) => {
      return (
          <li
              onClick={() => {
                return this.selectBusinessPartner(item);
              }}
              key={item.id}
              href
          >
            {item.name}
          </li>
      );
    });

    return (
        <div className="business-partner-menu">
          <Search
              searchableItems={this.getSearchableItems()}
              onClickAction={this.selectBusinessPartner}
          />

          <p>Last used:</p>
          <ul>
            {lastAccessedNodes}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentApplication: state.navigation.currentApplication,
  currentBusinessPartner: state.navigation.currentBusinessPartner
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentBusinessPartner: (businessPartner) => {
      dispatch(changeCurrentBusinessPartner(businessPartner));
    },

    toggleBusinessPartnerMenu: () => {
      dispatch(toggleBusinessPartnerMenu());
    },

    updateBusinessPartnerSearchResults: (businessPartnerSearchResults) => {
      dispatch(updateBusinessPartnerSearchResults(businessPartnerSearchResults));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessPartnerMenu);
