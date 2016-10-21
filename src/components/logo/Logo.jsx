import React, {Component} from 'react';
import logo from '../../assets/img/logo.svg';
// import smallLogo from '../../assets/img/logo--no-text.svg';
import './Logo.scss';

class Logo extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink logo-container"> {/* TODO Add onClick and go to Solution Center--> */ }
          <img src={logo}
               alt="Logo"
               className="logo logo--large logo--clickable" />
          { /*
          <img src={smallLogo}
               alt="Logo"
               className="logo logo--small logo--clickable" />
               */ }
        </div>
    );
  }
}

export default Logo;
