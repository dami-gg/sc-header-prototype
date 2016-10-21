import * as types from '../constants/ActionTypes';

const initialState = {
  currentProductId: undefined,
  currentApplicationId: undefined
};

const navigation = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENT_PRODUCT_ID:
      return {
        ...state,
        currentProductId: action.id
      };

    case types.CHANGE_CURRENT_APPLICATION_ID:
      return {
        ...state,
        currentApplicationId: action.id
      };

    default:
      return state
  }
};

export default navigation;
