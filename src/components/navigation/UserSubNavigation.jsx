import React, {Component} from 'react';

import './Navigation.scss';
import UserMenuOptions from '../user-menu/UserMenuOptions';

class UserSubNavigation extends Component {
  render() {
    return (
        <div className="navigation dc-row dc-row--collapse dc-row--align-middle dc-row--align-spaced">
          <UserMenuOptions />
        </div>
    );
  }
}

export default UserSubNavigation;
