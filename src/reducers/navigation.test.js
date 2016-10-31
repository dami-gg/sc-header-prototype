import navigation from './navigation';
import * as types from '../constants/ActionTypes';

const initialState = {
  currentProduct: undefined,
  currentApplication: undefined,
  currentBusinessPartner: undefined
};

const alteredState = {
  currentProduct: {id: 1, name: 'PRODUCT'},
  currentApplication: {id: 1, name: 'APPLICATION'},
  currentBusinessPartner: {id: 1, name: 'BUSINESS_PARTNER'}
};

describe('navigation reducer', () => {
  it('should return the initial state by default', () =>
      expect(navigation(undefined, {})).toEqual(initialState)
  );

  it('should react to an action with the type ' + types.CHANGE_CURRENT_PRODUCT, () => {
    let product = {id: 1, name: 'PRODUCT'};
    let action = {
      type: types.CHANGE_CURRENT_PRODUCT,
      product: product
    };

    expect(navigation(initialState, action)).toEqual({
      ...initialState,
      currentProduct: product
    });
  });

  it('should react to an action with the type ' + types.CHANGE_CURRENT_APPLICATION, () => {
    let application = {id: 1, name: 'APPLICATION'};
    let action = {
      type: types.CHANGE_CURRENT_APPLICATION,
      application: application
    };

    expect(navigation(initialState, action)).toEqual({
      ...initialState,
      currentApplication: application
    });
  });

  it('should react to an action with the type ' + types.CHANGE_CURRENT_BUSINESS_PARTNER, () => {
    let businessPartner = {id: 1, name: 'BUSINESS_PARTNER'};
    let action = {
      type: types.CHANGE_CURRENT_BUSINESS_PARTNER,
      businessPartner: businessPartner
    };

    expect(navigation(initialState, action)).toEqual({
      ...initialState,
      currentBusinessPartner: businessPartner
    });
  });

  it('should react to an action with the type ' + types.RESET_CURRENT_PRODUCT, () => {
    let action = {
      type: types.RESET_CURRENT_PRODUCT
    };

    expect(navigation(alteredState, action)).toEqual({
      ...alteredState,
      currentProduct: undefined
    });
  });

  it('should react to an action with the type ' + types.RESET_CURRENT_APPLICATION, () => {
    let action = {
      type: types.RESET_CURRENT_APPLICATION
    };

    expect(navigation(alteredState, action)).toEqual({
      ...alteredState,
      currentApplication: undefined
    });
  });

  it('should react to an action with the type ' + types.RESET_CURRENT_BUSINESS_PARTNER, () => {
    let action = {
      type: types.RESET_CURRENT_BUSINESS_PARTNER
    };

    expect(navigation(alteredState, action)).toEqual({
      ...alteredState,
      currentBusinessPartner: undefined
    });
  });
});