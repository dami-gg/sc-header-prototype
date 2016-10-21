import React, {Component} from 'react';
import {connect} from 'react-redux';

import Navigation from '../navigation/Navigation';
import ApplicationsSubNavigation from '../navigation/ApplicationsSubNavigation';
import UserSubNavigation from '../navigation/UserSubNavigation';
import './Header.scss';

class Header extends Component {
  showApplicationsSubNavigation() {
    return this.props.applicationsMenuShown;
  }

  showUserSubNavigation() {
    return this.props.userMenuShown;
  }

  render() {
    return (
        <header className="solution-center-header">
          <Navigation products={this.props.products} />
          {
            this.showApplicationsSubNavigation() &&
            <ApplicationsSubNavigation products={this.props.products} />
          }
          {
            this.showUserSubNavigation() &&
            <UserSubNavigation user={this.props.user} />
          }
        </header>
    );
  }
}

const mapStateToProps = (state) => ({
  applicationsMenuShown: state.visibility.applicationsMenuShown,
  userMenuShown: state.visibility.userMenuShown
});

export default connect(
    mapStateToProps
)(Header);

