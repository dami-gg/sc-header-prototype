import visibility from './visibility';
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

describe('visibility reducer', () => {
  it('should return the initial state by default', () =>
      expect(visibility(undefined, {})).toEqual(initialState)
  );

  it('should react to an action with the type ' + types.TOGGLE_APPLICATIONS_MENU, () => {

  });
});