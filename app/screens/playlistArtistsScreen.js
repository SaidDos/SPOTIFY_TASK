import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import PlaylistTracksStore from '../store/playlistTracksStore';
import ArtistCell from '../components/cells/artistCell';
import colors from '../utils/colors';

const playlistArtistsScreen = props => {
  const {playlist} = props.navigation.state.params; // getting playlist object from navigation obj

  const renderItem = ({item}) => <ArtistCell artist={item} />;

  useEffect(() => {
    PlaylistTracksStore().getPlaylistTracks(playlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {!PlaylistTracksStore().isFetching ? (
        <FlatList
          style={styles.flatlist}
          data={PlaylistTracksStore().sortArtistsAndRemoveDublicates()}
          renderItem={renderItem}
          keyExtractor={(item, index) => item.id}
        />
      ) : (
        <ActivityIndicator size="large" color={colors.APP_THEME_COLOR} />
      )}
    </View>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatlist: {
    marginTop: 20,
  },
});

export default playlistArtistsScreen;
