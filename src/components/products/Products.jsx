import React, {Component} from 'react';
import {connect} from 'react-redux';

import './Products.scss';
import Menu from '../menu/Menu';
import {toggleApplicationsMenu, changeSelectedProduct, resetSelectedProduct} from '../../actions';

class Products extends Component {
  toggleMenu(clickedProduct) {
    // If the submenu is closed, open it and update the shown product
    if (!this.props.applicationsMenuShown) {
      this.props.toggleApplicationsMenu();
      this.props.changeShownProduct(clickedProduct);
    }
    // If it is opened, close it only if the clicked product is the one that was shown
    else if (this.props.selectedProductId === clickedProduct.id) {
      this.props.toggleApplicationsMenu();
      this.props.resetSelectedProduct();
    }
  }

  switchMenu(hoveredProduct) {
    // If the submenu is closed, open it and update the shown product
      if (!this.props.applicationsMenuShown) {
      this.props.toggleApplicationsMenu();
      this.props.changeShownProduct(hoveredProduct);
    }
    // If it is opened, show another product only if it's a different one
    else if (this.props.selectedProductId !== hoveredProduct.id) {
      this.props.changeShownProduct(hoveredProduct);
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

Products.propTypes = {
  products: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  selectedProductId: state.visibility.selectedProduct && state.visibility.selectedProduct.id,
  applicationsMenuShown: state.visibility.applicationsMenuShown,
  currentProductId: state.navigation.currentProduct && state.navigation.currentProduct.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleApplicationsMenu: () => {
      dispatch(toggleApplicationsMenu());
    },

    changeShownProduct: (product) => {
      dispatch(changeSelectedProduct(product));
    },

    resetSelectedProduct: () => {
      dispatch(resetSelectedProduct());
    }
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);


