import React, {Component} from 'react';
import { connect } from 'react-redux';
import {toggleApplicationsMenu, changeShownProductMenuId} from '../../actions';

import './product.scss';

class Product extends Component {
  toggleMenu (event) {
    event.preventDefault();
    let clickedProductId = this.props.product.id;

    // Only toggle submenu if the user clicks the product which is already opened
    if (this.props.state.visibility.shownProductMenuId === clickedProductId) {
      this.props.toggleApplicationsMenu();
    }
    else {
      this.props.changeShownProductMenu(clickedProductId);
    }
  }

  render() {
    return(
        <li className="menu__item"> { /*ng-if="!module.hidden"*/}
          <a className="menu__link"
             onClick={event => this.toggleMenu(event)}
             href> { /* ng-class="{'menu__link--highlighted': module.id === $ctrl.currentModule}" */ }
            {this.props.product.name}
          </a>
        </li>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApplicationsMenu: () => {
      dispatch(toggleApplicationsMenu());
    },

    changeShownProductMenu: (productId) => {
      dispatch(changeShownProductMenuId(productId));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);

