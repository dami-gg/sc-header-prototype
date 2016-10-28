import * as types from '../constants/ActionTypes';

const initialState = {
  applicationsMenuShown: false,
  userMenuShown: false,
  selectedProduct: undefined,
  mobileProductMenuShown: false,
  businessPartnerMenuShown: false,
  helpWidgetLoaded: false,
  helpWidgetShown: false
};

const visibility = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_APPLICATIONS_MENU:
      return {
        ...state,
        applicationsMenuShown: !state.applicationsMenuShown,
        userMenuShown: false
      };

    case types.TOGGLE_USER_MENU:
      return {
        ...state,
        userMenuShown: !state.userMenuShown,
        applicationsMenuShown: false
      };

    case types.SHOW_BUSINESS_PARTNER_MENU:
      return {
        ...state,
        businessPartnerMenuShown: true
      };

    case types.HIDE_BUSINESS_PARTNER_MENU:
      return {
        ...state,
        businessPartnerMenuShown: false
      };

    case types.TOGGLE_BUSINESS_PARTNER_MENU:
      return {
        ...state,
        businessPartnerMenuShown: !state.businessPartnerMenuShown
      };

    case types.CHANGE_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: action.product
      };

    case types.RESET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: undefined
      };

    case types.SET_HELP_WIDGET_AS_LOADED:
      return {
        ...state,
        helpWidgetLoaded: true
      };

    case types.HIDE_HELP_WIDGET:
      return {
        ...state,
        helpWidgetShown: false
      };

    case types.TOGGLE_HELP_WIDGET:
      return {
        ...state,
        helpWidgetShown: !state.helpWidgetShown
      };

    case types.HIDE_ALL_MENUS:
      return {
        ...state,
        applicationsMenuShown: false,
        userMenuShown: false,
        businessPartnerMenuShown: false,
        helpWidgetShown: false
      };

    default:
      return state
  }
};

export default visibility;
