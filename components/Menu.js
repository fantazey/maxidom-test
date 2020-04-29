import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Text,
  View,
  BackHandler
} from 'react-native';

export default class Menu extends React.Component {
  state = {
    visible: false
  };

  showMenu = () => {
    this.setState({visible: true})
  };

  hideMenu = () => {
    this.setState({visible: false})
  };

  onClickAbout = () => {

  };

  onClickExit = () => {
    BackHandler.exitApp();
  };

  render() {
    if (!this.state.visible) {
      return <View style={styles.menuButton}>
        <Button title="Menu" onPress={this.showMenu}/>
      </View>;
    }
    return <TouchableOpacity onPress={this.hideMenu} style={styles.backdrop}>
      <View style={styles.menu}>
        <Text style={styles.menuHeader}>Test menu</Text>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={styles.menuBtnContainer}>
            <View style={styles.menuBtnWrapper}>
              <Button
                title="About"
                onPress={this.onClickAbout}/>
            </View>
            <View style={styles.menuBtnWrapper}>
              <Button
                title="Exit"
                color="red"
                onPress={this.onClickExit}/>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    opacity: 0.9
  },
  menuButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  menu: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  menuBtnContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  menuHeader: {
    display:'flex',
    alignSelf: 'center'
  },
  menuBtnWrapper: {
    marginVertical: 5,
    width: '70%'
  }
});
