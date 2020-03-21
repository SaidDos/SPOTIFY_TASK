import 'react-native';
import React from 'react';
import ArtistCell from '../cells/artistCell';

import renderer from 'react-test-renderer';

it('should renders correctly', () => {
  const artist = {id: 1, name: 'said', type: 'human'};
  const tree = renderer.create(<ArtistCell artist={artist} />).toJSON();
  expect(tree).toMatchSnapshot();
});
