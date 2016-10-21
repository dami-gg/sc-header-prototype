import React, {Component} from 'react';
import { connect } from 'react-redux';

import './Products.scss';
import Menu from '../menu/Menu';
import {toggleApplicationsMenu, changeSelectedProductId} from '../../actions';

class Products extends Component {
  toggleMenu (clickedItem, event) {
    event.preventDefault();
    let clickedProductId = clickedItem.id;

    // If the submenu is closed, open it
    if (!this.props.applicationsMenuShown) {
      this.props.toggleApplicationsMenu();
      this.props.changeShownProductMenu(clickedProductId);
    }
    else {
      // If it is opened, close it only if the clicked product is the one that was shown
      if (this.props.selectedProductId === clickedProductId) {
        this.props.toggleApplicationsMenu();
        this.props.changeShownProductMenu(undefined);
      }
      else {
        this.props.changeShownProductMenu(clickedProductId);
      }
    }
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__products">
          <nav className="navigation--global navigation--sub navigation--left">
            <Menu
                menuItems={this.props.products}
                onClickAction={this.toggleMenu.bind(this)}
            />
          </nav>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProductId,
  applicationsMenuShown: state.visibility.applicationsMenuShown
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApplicationsMenu: () => {
      dispatch(toggleApplicationsMenu());
    },

    changeShownProductMenu: (productId) => {
      dispatch(changeSelectedProductId(productId));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);


