import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Header.scss';
import Navigation from '../navigation/Navigation';
import ApplicationsSubNavigation from '../navigation/ApplicationsSubNavigation';
import UserSubNavigation from '../navigation/UserSubNavigation';
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
              userBrands={this.props.userBrands}
              userMerchants={this.props.userMerchants}
              userSuppliers={this.props.userSuppliers}
          />
          {
            this.showApplicationsSubNavigation() &&
            <ApplicationsSubNavigation
                products={this.props.products}
            />
          }
          {
            this.showUserSubNavigation() &&
            <UserSubNavigation
                user={this.props.user}
            />
          }
          {
            this.showBusinessPartnerMenu() &&
            <BusinessPartnerMenu
                userBrands={this.props.userBrands}
                userMerchants={this.props.userMerchants}
                userSuppliers={this.props.userSuppliers}
                lastAccessedBrands={this.props.lastAccessedBrands}
                lastAccessedMerchants={this.props.lastAccessedMerchants}
                lastAccessedSuppliers={this.props.lastAccessedSuppliers}
            />
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

