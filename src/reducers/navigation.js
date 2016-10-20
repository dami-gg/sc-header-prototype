import * as types from '../constants/ActionTypes';

const initialState = {
  selectedProductId: undefined,
  selectedApplicationId: undefined
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PRODUCT_ID:
      return {
        ...state,
        selectedProductId: action.id
      };

    case types.CHANGE_APPLICATION_ID:
      return {
        ...state,
        selectedApplicationId: action.id
      };

    default:
      return state
  }
};

export default navigation;
