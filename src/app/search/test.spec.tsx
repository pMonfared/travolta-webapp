import * as React from 'react';
import renderer from 'react-test-renderer';

import Search from './page';

describe('Search', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Search />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
