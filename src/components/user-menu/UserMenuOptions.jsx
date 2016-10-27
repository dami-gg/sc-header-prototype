import React, {Component} from 'react';

import Menu from '../menu/Menu';

class UserMenuOptions extends Component {
  render() {
    return (
        <div className="navigation navigation--right dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <div className="dc-column dc-column--shrink sc-header__user-menu">
            <nav className="navigation--menu">
              <Menu
                  menuItems={this.getOptions()}
                  onClickAction={this.navigateToOption.bind(this)}
              />
            </nav>
          </div>
        </div>
    );
  }

  getOptions() {
    return [{
      name: 'Terms & Conditions',
      url: '/terms-conditions'
    }, {
      name: 'Privacy Policy',
      url: '/privacy-policy'
    }, {
      name: 'Imprint',
      url: '/imprint'
    }, {
      name: 'My Account',
      url: '/account'
    }, {
      name: 'Logout',
      url: '/logout'
    }];
  }

  navigateToOption(clickedItem) {
    console.log('navigated to: ' + clickedItem.url);
  }
}

UserMenuOptions.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default UserMenuOptions;
