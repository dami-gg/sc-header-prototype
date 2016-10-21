import * as types from '../constants/ActionTypes';

const initialState = {
  applicationsMenuShown: false,
  userMenuShown: false,
  selectedProductId: undefined
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

    case types.CHANGE_SELECTED_PRODUCT_ID:
      return {
          ...state,
        selectedProductId: action.productId
      };

    default:
      return state
  }
};

export default visibility;
