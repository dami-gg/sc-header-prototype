import React, {Component} from 'react';

import Navigation from '../navigation/navigation.component';
import SubNavigation from '../navigation/sub-navigation.component';
import './header.scss';

class Header extends Component {
  render() {
    return (
        <header className="solution-center-header">
          <Navigation/>
          <SubNavigation/>
        </header>
    );
  }
}

export default Header;
