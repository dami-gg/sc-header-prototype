import React, {Component} from 'react';
import { connect } from 'react-redux';

import './UserMenu.scss';
import {toggleUserMenu} from '../../actions';

class UserMenu extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink">
          <div className="toggle"
               title="User Account"
               onClick={this.props.toggleUserMenu}>
            <span className="user-name">
              {this.props.user ? this.props.user.firstName + ' ' + this.props.user.lastName : ''}
            </span>
            <i className="dc-icon dc-icon--user dc-icon--interactive"></i>
          </div>
        </div>
    );
  }
}

UserMenu.propTypes = {
  user: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleUserMenu: () => {
      dispatch(toggleUserMenu());
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserMenu);
