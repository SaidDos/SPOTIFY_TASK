import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import FeaturedPlaylistScreen from '../../screens/featuredPlaylistScreen';
import PlaylistArtistsScreen from '../../screens/playlistArtistsScreen';

// this our only navigation stack which contains from 2 screens

const featuredPlaylistStackNav = createStackNavigator({
  FeaturedPlaylistScreen: {
    screen: FeaturedPlaylistScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Featured Playlist',
    }),
  },
  PlaylistArtistsScreen: {
    screen: PlaylistArtistsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Playlist Artist',
    }),
  },
  initialRouteName: 'FeaturedPlaylistScreen',
});

export default createAppContainer(featuredPlaylistStackNav);
