import React, {Component} from 'react';

import Products from '../products/Products';
import BusinessPartnerSwitcher from '../business-partner-switcher/BusinessPartnerSwitcher';
import UserMenu from '../user-menu/UserMenu';
import HelpSection from '../help-section/HelpSection';
import Logo from '../logo/LogoContainer';
import './Navigation.scss';

class Navigation extends Component {
  render() {
    return (
        <div className="navigation dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <Logo/>
          <Products products={this.props.products} />
          <BusinessPartnerSwitcher/>
          <UserMenu/>
          <HelpSection/>
        </div>
    );
  }
}

export default Navigation;
