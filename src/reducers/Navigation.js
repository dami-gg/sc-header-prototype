import * as types from '../constants/ActionTypes';

const initialState = {
  currentProduct: undefined,
  currentApplication: undefined,
  currentBusinessPartner: undefined
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.product
      };

    case types.CHANGE_CURRENT_APPLICATION:
      return {
        ...state,
        currentApplication: action.application
      };

    case types.CHANGE_CURRENT_BUSINESS_PARTNER:
      return {
        ...state,
        currentBusinessPartner: action.businessPartner
      };

    default:
      return state
  }
};

export default navigation;
