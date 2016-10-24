import React, {Component} from 'react';
import {connect} from 'react-redux';

import './BusinessPartner.scss';
import Menu from '../menu/Menu';
import {toggleBusinessPartnerMenu} from '../../actions';

let placeholder = {
  id: -1,
  name: 'Choose business partner'
};

class BusinessPartner extends Component {
  getMenuItem() {
    return this.currentBusinessPartner ? [this.currentBusinessPartner] : [placeholder];
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__business-partners">
          {
            // An application must be selected first in all cases before being able to select a business partner
            this.props.currentApplication &&
            <nav className="navigation--menu">
              <Menu
                  menuItems={this.getMenuItem()}
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

