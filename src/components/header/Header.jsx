import React, {Component} from 'react';

import Navigation from '../navigation/Navigation';
import SubNavigation from '../navigation/SubNavigation';
import './Header.scss';

class Header extends Component {
  render() {
    return (
        <header className="solution-center-header">
          <Navigation products={this.props.products} />
          <SubNavigation products={this.props.products} />
        </header>
    );
  }
}

export default Header;
