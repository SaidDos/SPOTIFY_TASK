import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import ArrowIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';

const playlistCell = props => {
  const {playlist} = props;

  return (
    <View style={styles.cell}>
      <Image source={{uri: playlist.image}} style={styles.image} />
      <View style={styles.textArea}>
        <Text style={styles.playlistName}>{playlist.name}</Text>
        <Text style={{color: colors.GREY}}> by {playlist.owner}</Text>
      </View>
      <ArrowIcon name="ios-arrow-forward" size={30} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    flexDirection: 'row',
    height: 70,
    width: 319.3,
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    alignSelf: 'center',
    width: 55,
    height: 55,
    justifyContent: 'flex-start',
  },
  textArea: {
    marginHorizontal: 10,
  },
  playlistName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon: {
    alignSelf: 'center',
    position: 'absolute',
    right: 10,
  },
});
export default playlistCell;
