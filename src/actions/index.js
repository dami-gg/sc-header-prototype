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

export const changeCurrentProductId = (productId) => {
  return {
    type: types.CHANGE_CURRENT_PRODUCT_ID,
    productId
  };
};

export const changeCurrentApplicationId = (applicationId) => {
  return {
    type: types.CHANGE_CURRENT_APPLICATION_ID,
    applicationId
  };
};
