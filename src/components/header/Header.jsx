import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Header.scss';
import Navigation from '../navigation/Navigation';
import Applications from '../applications/Applications';
import UserMenuOptions from '../user-menu/UserMenuOptions';
import BusinessPartnerMenu from '../business-partner-menu/BusinessPartnerMenu';

class Header extends Component {
  showApplicationsSubNavigation() {
    return this.props.applicationsMenuShown;
  }

  showUserSubNavigation() {
    return this.props.userMenuShown;
  }

  showBusinessPartnerMenu() {
    return this.props.businessPartnerMenuShown;
  }

  render() {
    return (
        <header className="solution-center-header">
          <Navigation
              products={this.props.products}
          />
          {
            this.showApplicationsSubNavigation() &&
            <Applications
                products={this.props.products}
                userBusinessPartners={this.props.userBusinessPartners}
            />
          }
          {
            this.showUserSubNavigation() &&
            <UserMenuOptions
                user={this.props.user}
            />
          }
          {
            this.showBusinessPartnerMenu() &&
            <BusinessPartnerMenu />
          }
        </header>
    );
  }
}

const mapStateToProps = (state) => ({
  applicationsMenuShown: state.visibility.applicationsMenuShown,
  userMenuShown: state.visibility.userMenuShown,
  businessPartnerMenuShown: state.visibility.businessPartnerMenuShown,
  currentApplication: state.navigation.currentApplication
});

export default connect(
    mapStateToProps
)(Header);

