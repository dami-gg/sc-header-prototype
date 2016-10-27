import React, {Component} from 'react';
import {connect} from 'react-redux';

import './BusinessPartner.scss';
import Menu from '../menu/Menu';
import {toggleBusinessPartnerMenu} from '../../actions';

class BusinessPartner extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__business-partners">
          {
            // The user must be in an application and there should be a selected business partner in order to
            // show the menu to change it
            this.props.currentApplication && this.props.currentBusinessPartner &&
            <nav className="navigation--menu">
              <Menu
                  menuItems={[this.props.currentBusinessPartner]}
                  onClickAction={this.props.toggleBusinessPartnerMenu}
                  isSwitcher={true}
              />
            </nav>
          }
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentBusinessPartner: state.navigation.currentBusinessPartner,
  currentApplication: state.navigation.currentApplication
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleBusinessPartnerMenu: () => {
      dispatch(toggleBusinessPartnerMenu());
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BusinessPartner);

