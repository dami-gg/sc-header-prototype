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

export const changeShownProductMenuId = (productId) => {
  return {
    type: types.CHANGE_SHOWN_PRODUCT_MENU_ID,
    productId
  }
};

export const changeProductId = (productId) => {
  return {
    type: types.CHANGE_PRODUCT_ID,
    productId
  };
};

export const changeApplicationId = (applicationId) => {
  return {
    type: types.CHANGE_APPLICATION_ID,
    applicationId
  };
};
