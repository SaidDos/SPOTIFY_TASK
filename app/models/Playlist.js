import {types} from 'mobx-state-tree';

// Playlist Model
const Playlist = types.model('Playlist', {
  id: types.identifier,
  name: types.string,
  owner: types.string,
  image: types.string,
});

export default Playlist;
