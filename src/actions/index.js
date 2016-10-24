import * as types from '../constants/ActionTypes';

export const toggleApplicationsMenu = () => {
  return {
    type: types.TOGGLE_APPLICATIONS_MENU
  };
};

export const toggleUserMenu = () => {
  return {
    type: types.TOGGLE_USER_MENU
  };
};

export const changeSelectedProductId = (productId) => {
  return {
    type: types.CHANGE_SELECTED_PRODUCT_ID,
    productId
  }
};

export const changeCurrentProduct = (product) => {
  return {
    type: types.CHANGE_CURRENT_PRODUCT,
    product
  };
};

export const changeCurrentApplication = (application) => {
  return {
    type: types.CHANGE_CURRENT_APPLICATION,
    application
  };
};

export const changeCurrentBusinessPartner = (businessPartner) => {
  return {
    type: types.CHANGE_CURRENT_BUSINESS_PARTNER,
    businessPartner
  };
};

export const toggleBusinessPartnerMenu = () => {
  return {
    type: types.TOGGLE_BUSINESS_PARTNER_MENU
  }
};
