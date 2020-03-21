import {types, flow} from 'mobx-state-tree';
import Playlist from '../models/Playlist';
import api from '../services/fetchApi';

//Playlist Store
const PlaylistsStore = types
  .model({
    playlists: types.array(Playlist), //playlist Object model
    isFetching: false,
  })
  .actions(self => {
    function mapPlaylists(playlists) {
      //here we map response array to our playlists
      self.playlists = [];
      playlists.map(playlistItem => {
        const aPlaylist = {
          id: playlistItem.id,
          name: playlistItem.name,
          owner: playlistItem.owner.display_name,
          image: playlistItem.images[0].url,
        };
        self.playlists.push(aPlaylist);
      });
    }

    // this is where asyncronous action takes place using flow and generators
    const getFeaturedPlaylists = flow(function* getFeaturedPlaylists(limit) {
      self.isFetching = true;
      try {
        //we put code in try and catch as it returns a promise
        const response = yield api.getData(
          `browse/featured-playlists?limit=${limit}`,
          'GET',
        );
        //chicking if there's a response
        if (response && response.playlists && response.playlists.items) {
          mapPlaylists(response.playlists.items);
        }
        self.isFetching = false;
      } catch (error) {
        self.isFetching = false;
        // eslint-disable-next-line no-alert
        alert(error);
      }
    });

    return {
      getFeaturedPlaylists,
    };
  });

let store = null;

export default () => {
  if (store) {
    return store;
  }

  store = PlaylistsStore.create({
    playlists: [],
  });
  return store;
};
