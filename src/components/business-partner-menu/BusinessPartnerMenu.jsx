import React, {Component} from 'react';
import {connect} from 'react-redux';

import './BusinessPartnerMenu.scss';
import {
    changeCurrentBusinessPartner, hideBusinessPartnerMenu, updateBusinessPartnerSearchResults
} from '../../actions';
import Search from '../search/Search';

class BusinessPartnerMenu extends Component {
  render() {
    let lastAccessedNodes = this.props.lastAccessedBusinessPartners.map((item) => {
      return (
          <li className="business-partner-menu__last-accessed__item"
              key={item.id}
              onClick={() => {
                this.selectBusinessPartner(item);
              }}
          >
            {item.name}
          </li>
      );
    });

    return (
        <div className="business-partner-menu">
          <Search
              searchableItems={this.props.accessibleBusinessPartners}
              onClickAction={this.selectBusinessPartner.bind(this)}
          />

          <p>Last used:</p>
          <ul className="business-partner-menu__last-accessed">
            {lastAccessedNodes}
          </ul>
        </div>
    );
  }

  selectBusinessPartner(businessPartner) {
    this.props.changeCurrentBusinessPartner(businessPartner);
    this.props.hideBusinessPartnerMenu();
    this.props.updateBusinessPartnerSearchResults([]);
  }
}

const mapStateToProps = (state) => ({
  currentApplication: state.navigation.currentApplication,
  currentBusinessPartner: state.navigation.currentBusinessPartner,
  accessibleBusinessPartners: state.businessPartners.accessibleBusinessPartners,
  lastAccessedBusinessPartners: state.businessPartners.lastAccessedBusinessPartners
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentBusinessPartner: (businessPartner) => {
      dispatch(changeCurrentBusinessPartner(businessPartner));
    },

    hideBusinessPartnerMenu: () => {
      dispatch(hideBusinessPartnerMenu());
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
