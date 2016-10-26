import * as types from '../constants/ActionTypes';

/*
 VISIBILITY
 */

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

export const toggleBusinessPartnerMenu = () => {
  return {
    type: types.TOGGLE_BUSINESS_PARTNER_MENU
  }
};

export const changeSelectedProduct = (product) => {
  return {
    type: types.CHANGE_SELECTED_PRODUCT,
    product
  }
};

export const resetSelectedProduct = () => {
  return {
    type: types.RESET_SELECTED_PRODUCT
  }
};

/*
  NAVIGATION
 */

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

export const resetCurrentProduct = () => {
  return {
    type: types.RESET_CURRENT_PRODUCT
  };
};

export const resetCurrentApplication = () => {
  return {
    type: types.RESET_CURRENT_APPLICATION
  };
};

export const resetCurrentBusinessPartner = () => {
  return {
    type: types.RESET_CURRENT_BUSINESS_PARTNER
  };
};

/*
 BUSINESS PARTNER SEARCH
 */

export const updateBusinessPartnerSearchResults = (businessPartnerSearchResults) => {
  return {
    type: types.UPDATE_BUSINESS_PARTNER_SEARCH_RESULTS,
    businessPartnerSearchResults
  }
};
