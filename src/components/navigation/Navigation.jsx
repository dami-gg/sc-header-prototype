import React, {Component} from 'react';

import Products from '../products/Products';
import BusinessPartner from '../business-partner/BusinessPartner';
import UserMenu from '../user-menu/UserMenu';
import HelpSection from '../help-section/HelpSection';
import LogoContainer from '../logo/LogoContainer';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
        <div className="navigation dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <LogoContainer />
          <Products products={this.props.products} />
          <BusinessPartner />
          <UserMenu />
          <HelpSection />
        </div>
    );
  }
}

export default Navigation;
