import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo component', () => {
  it('should render correctly', () => {
    let tree = renderer.create(
        <Logo
          source="source"
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});