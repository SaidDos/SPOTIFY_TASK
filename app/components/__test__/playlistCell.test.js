import 'react-native';
import React from 'react';
import PlaylistCell from '../cells/playlistCell';

import renderer from 'react-test-renderer';

it('should renders correctly and generating a snapShot', () => {
  let playlist = {name: 'said', image: 'someImage'};
  const tree = renderer.create(<PlaylistCell playlist={playlist} />).toJSON();
  expect(tree).toMatchSnapshot();
});
