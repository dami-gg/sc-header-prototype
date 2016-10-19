import React, {Component} from 'react';

class UserMenu extends Component {
  render() {
    return (
        <div className="dc-column dc-column--shrink">
          <div className="toggle"
               title="User Account"> { /* TODO Add onClick event to go to user page */ }
            <span className="user-name">
              Damián García
            </span>
            <i className="dc-icon dc-icon--user dc-icon--interactive"></i>
          </div>
        </div>
    );
  }
}

export default UserMenu;
