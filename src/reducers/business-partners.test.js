import businessPartners from './business-partners';
import * as types from '../constants/ActionTypes';

const initialState = {
  accessibleBusinessPartners: [],
  lastAccessedBusinessPartners: [],
  businessPartnerSearchResults: []
};

describe('business partners reducer', () => {
  it('should return the initial state by default', () =>
      expect(businessPartners(undefined, {})).toEqual(initialState)
  );

  it('should react to an action with the type ' + types.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS, () => {
    let accessibleBusinessPartners = [{id: 1, name: 'BUSINESS_PARTNER_1'}, {id: 2, name: 'BUSINESS_PARTNER_2'}];
    let action = {
      type: types.UPDATE_ACCESSIBLE_BUSINESS_PARTNERS,
      accessibleBusinessPartners: accessibleBusinessPartners
    };

    expect(businessPartners(initialState, action)).toEqual({
      ...initialState,
      accessibleBusinessPartners: accessibleBusinessPartners
    });
  });

  it('should react to an action with the type ' + types.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS, () => {
    let lastAccessedBusinessPartners = [{id: 1, name: 'BUSINESS_PARTNER_1'}, {id: 2, name: 'BUSINESS_PARTNER_2'}];
    let action = {
      type: types.UPDATE_LAST_ACCESSED_BUSINESS_PARTNERS,
      lastAccessedBusinessPartners: lastAccessedBusinessPartners
    };

    expect(businessPartners(initialState, action)).toEqual({
      ...initialState,
      lastAccessedBusinessPartners: lastAccessedBusinessPartners
    });
  });

  it('should react to an action with the type ' + types.UPDATE_BUSINESS_PARTNER_SEARCH_RESULTS, () => {
    let businessPartnerSearchResults = [{id: 1, name: 'BUSINESS_PARTNER_1'}, {id: 2, name: 'BUSINESS_PARTNER_2'}];
    let action = {
      type: types.UPDATE_BUSINESS_PARTNER_SEARCH_RESULTS,
      businessPartnerSearchResults: businessPartnerSearchResults
    };

    expect(businessPartners(initialState, action)).toEqual({
      ...initialState,
      businessPartnerSearchResults: businessPartnerSearchResults
    });
  });
});