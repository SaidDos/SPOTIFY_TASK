import {types, flow} from 'mobx-state-tree';
import Artist from '../models/Artist';
import api from '../services/fetchApi';
import {getSortedArray} from '../utils/functions/getSortedArray';
import {getUniqueArrayIDs} from '../utils/functions/getUniqueArrayIDs';
import {findObjectInArray} from '../utils/functions/findObjectInArray';

const PlaylistTracksStore = types
  .model({
    artists: types.array(Artist),
    isFetching: false, // isFetching here just for rendering loading indicator in screens
  })
  .actions(self => {
    function mapTracks(tracks) {
      tracks.forEach(track => {
        if (track.track.artists && track.track.artists.length) {
          track.track.artists.forEach(artist => {
            self.artists.push({
              id: artist.id,
              name: artist.name,
              type: artist.type,
            });
          });
        }
      });
    }

    const getPlaylistTracks = flow(function* getPlaylistTracks(playlist) {
      self.isFetching = true;
      self.artists = [];
      try {
        const response = yield api.getData(
          `playlists/${playlist.id}/tracks`,
          'GET',
        );
        if (response && response.items) {
          self.isFetching = false;
          mapTracks(response.items);
        }
      } catch (error) {
        self.isFetching = false;
        // eslint-disable-next-line no-alert
        alert(error);
      }
    });

    return {
      getPlaylistTracks,
    };
  })
  .views(self => ({
    sortArtistsAndRemoveDublicates() {
      //here we make view from our playlist store which return sorten and unique artists
      const uniqueArtists = getUniqueArrayIDs(self.artists).map(id => {
        return findObjectInArray(self.artists, id);
      });
      return getSortedArray(uniqueArtists);
    },
  }));

let store = null;

export default () => {
  if (store) {
    return store;
  }

  store = PlaylistTracksStore.create({
    artists: [],
  });
  return store;
};
