import React, {Component} from 'react';

import './Logo.scss';
import Logo from './Logo';
import smallLogo from '../../assets/img/logo--no-text.svg';
import logo from '../../assets/img/logo.svg';

class LogoContainer extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink">
          <div className="logo-container logo-container--mobile">
            <Logo source={smallLogo} />

            <div className="menu-toggle"

            >
              <i className="dc-icon dc-icon--interactive dc-icon--menu"></i>
            </div>
          </div>

          <div className="logo-container logo-container--desktop"> {/* TODO Add onClick and go to Solution Center--> */ }
            <Logo source={logo} />
          </div>
        </div>

    );
  }
}

export default LogoContainer;
