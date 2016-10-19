import React, {Component} from 'react';

import Logo from '../logo/logo.component';
import Products from '../products/products.component';
import BusinessPartnerSwitcher from '../business-partner-switcher/business-partner-switcher.component';
import UserMenu from '../user-menu/user-menu.component';
import HelpSection from '../help-section/help-section.component';

class Navigation extends Component {
  render() {
    return (
        <div className="navigation navigation--main dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <Logo/>
          <Products/>
          <BusinessPartnerSwitcher/>
          <UserMenu/>
          <HelpSection/>
        </div>
    );
  }
}

export default Navigation;
