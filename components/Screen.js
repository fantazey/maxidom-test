import React from 'react';
import {StyleSheet, View} from 'react-native';

function Screen(props) {
  return <View style={styles.container}>{props.children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'column'
  }
});

export default Screen;
