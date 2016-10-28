import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Logo.scss';
import Logo from './Logo';
import smallLogo from '../../assets/img/logo--no-text.svg';
import logo from '../../assets/img/logo.svg';
import {
    resetCurrentProduct,
    resetCurrentApplication,
    resetCurrentBusinessPartner,
    hideAllMenus
}
    from '../../actions';


class LogoContainer extends Component {
  navigateToSolutionCenter() {
    this.props.resetCurrentBusinessPartner();
    this.props.resetCurrentApplication();
    this.props.resetCurrentProduct();
    this.props.hideAllMenus();
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink">
          <div className="logo-container logo-container--mobile">
            <Logo
                source={smallLogo}
            />

            <div className="menu-toggle">
              <i className="dc-icon dc-icon--interactive dc-icon--menu"></i>
            </div>
          </div>

          <div
              className="logo-container logo-container--desktop"
              onClick={() => {
                this.navigateToSolutionCenter()
              }}
          >
            <Logo
                source={logo}
            />
          </div>
        </div>

    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    // TODO Check if there's a way to combine the three dispatches in one single prop
    resetCurrentBusinessPartner: () => {
      dispatch(resetCurrentBusinessPartner());
    },

    resetCurrentApplication: () => {
      dispatch(resetCurrentApplication());
    },

    resetCurrentProduct: () => {
      dispatch(resetCurrentProduct());
    },

    hideAllMenus: () => {
      dispatch(hideAllMenus());
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoContainer);
