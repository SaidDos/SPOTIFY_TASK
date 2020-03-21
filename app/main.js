import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import FeaturedPlaylistStackNav from '../app/navigations/stackNavigations/featuredPlaylistStackNav';
import colors from './utils/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.APP_THEME_COLOR}
        barStyle="dark-content"
      />
      <FeaturedPlaylistStackNav />
    </SafeAreaView>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
