import * as types from '../constants/ActionTypes';

const initialState = {
  accessibleBusinessPartners: [],
  lastAccessedBusinessPartners: [],
  businessPartnerSearchResults: []
};

const businessPartners = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS:
      return {
        ...state,
        accessibleBusinessPartners: action.accessibleBusinessPartners
      };

      case types.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS:
      return {
        ...state,
        lastAccessedBusinessPartners: action.lastAccessedBusinessPartners
      };

    case types.UPDATE_BUSINESS_PARTNER_SEARCH_RESULTS:
      return {
        ...state,
        businessPartnerSearchResults: action.businessPartnerSearchResults
      };

    default:
      return state
  }
};

export default businessPartners;
