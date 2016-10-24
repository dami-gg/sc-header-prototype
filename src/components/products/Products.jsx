import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Products.scss';
import Menu from '../menu/Menu';
import {toggleApplicationsMenu, changeSelectedProductId} from '../../actions';

class Products extends Component {
  toggleMenu(clickedItem) {
    let clickedProductId = clickedItem.id;

    // If the submenu is closed, open it and update the shown product
    if (!this.props.applicationsMenuShown) {
      this.props.toggleApplicationsMenu();
      this.props.changeShownProductId(clickedProductId);
    }
    // If it is opened, close it only if the clicked product is the one that was shown
    else if (this.props.selectedProductId === clickedProductId) {
      this.props.toggleApplicationsMenu();
      this.props.changeShownProductId(undefined);
    }
  }

  switchMenu(hoveredItem) {
    let hoveredProductId = hoveredItem.id;

    // If the submenu is closed, open it and update the shown product
      if (!this.props.applicationsMenuShown) {
      this.props.toggleApplicationsMenu();
      this.props.changeShownProductId(hoveredProductId);
    }
    // If it is opened, show another product only if it's a different one
    else if (this.props.selectedProductId !== hoveredProductId) {
      this.props.changeShownProductId(hoveredProductId);
    }
  }

  render() {
    return (
        <div className="dc-column dc-column--shrink sc-header__products">
          <nav className="navigation--menu">
            <Menu
                menuItems={this.props.products}
                onClickAction={this.toggleMenu.bind(this)}
                onHoverAction={this.switchMenu.bind(this)}
                isSwitcher={true}
                highlightedItemId={this.props.currentProductId}
                highlightedClass={'bold'}
            />
          </nav>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProductId,
  applicationsMenuShown: state.visibility.applicationsMenuShown,
  currentProductId: state.navigation.currentProduct && state.navigation.currentProduct.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApplicationsMenu: () => {
      dispatch(toggleApplicationsMenu());
    },

    changeShownProductId: (productId) => {
      dispatch(changeSelectedProductId(productId));
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);


