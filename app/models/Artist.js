import {types} from 'mobx-state-tree';

// Artist Model
const Artist = types.model('Artist', {
  id: types.identifier,
  name: types.string,
  type: types.string,
});

export default Artist;
