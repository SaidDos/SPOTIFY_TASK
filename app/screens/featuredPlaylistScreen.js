import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import playlistStore from '../store/playlistsStore';
import PlaylistCell from '../components/cells/playlistCell';
import colors from '../utils/colors';

const featuredPlaylistScreen = props => {
  const [limit, setLimit] = useState(20); //initializing page limit as 20

  const fetchPlaylists = () => {
    playlistStore().getFeaturedPlaylists(limit);
  };

  useEffect(() => {
    fetchPlaylists(); //fetching playlists when mounting screen and refetching again when limt changing
  }, [limit]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('PlaylistArtistsScreen', {playlist: item}) //sending playlist object to PlaylistArtistsScreen when navigate
      }>
      <PlaylistCell playlist={item} />
    </TouchableOpacity>
  );

  const handleEnd = () => {
    setLimit(limit + 20); // increment limit by 20
    fetchPlaylists();
  };

  const footer = () => {
    if (playlistStore().isFetching) {
      return <ActivityIndicator size="large" color={colors.APP_THEME_COLOR} />;
    }
    return <Text style={styles.footer}>No More Playlists</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={playlistStore().playlists}
        extraData={playlistStore().playlist}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        onScroll={e => {
          if (
            e.nativeEvent.layoutMeasurement.height +
              e.nativeEvent.contentOffset.y >=
            e.nativeEvent.contentSize.height
          ) {
            handleEnd();
          }
        }}
        ListFooterComponent={footer}
      />
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
  footer: {
    alignSelf: 'center',
  },
});

export default featuredPlaylistScreen;
