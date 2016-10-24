import React, {Component} from 'react';
import {connect} from 'react-redux';

import './BusinessPartnerMenu.scss';
import {changeCurrentBusinessPartner} from '../../actions';
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

  render() {
    let lastAccessedNodes = this.getLastAccessedItems().map((item) => {
      return (
          <li
              onClick={this.props.changeCurrentBusinessPartner(item.id)}
              key={item.id}
          >
            {item.name}
          </li>
      )
    });

    return (
        <div className="business-partner-menu">
          <Search
              searchableItems={this.getSearchableItems()}
              onClickAction={this.props.changeCurrentBusinessPartner}
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
    changeCurrentBusinessPartner: () => {
      dispatch(changeCurrentBusinessPartner(undefined));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessPartnerMenu);
