import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import colors from '../../utils/colors';

const artistCell = props => {
  const {artist} = props;

  return (
    <View style={styles.cell}>
      <Text style={styles.artistName}>{artist.name}</Text>
      <Text style={{color: colors.GREY}}> {artist.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    height: 70,
    width: 319.3,
    backgroundColor: colors.LIGHT_GREY,
    padding: 10,
    marginBottom: 20,
  },
  artistName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default artistCell;
