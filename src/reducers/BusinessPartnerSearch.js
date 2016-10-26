import * as types from '../constants/ActionTypes';

const initialState = {
  businessPartnerSearchResults: []
};

const businessPartnerSearch = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_BUSINESS_PARTNER_SEARCH_RESULTS:
      return {
        ...state,
        businessPartnerSearchResults: action.businessPartnerSearchResults
      };

    default:
      return state
  }
};

export default businessPartnerSearch;
