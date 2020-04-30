import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Button,
  Text,
  View,
  BackHandler
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'

class Menu extends React.Component {
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
    this.props.navigation.navigate('About');
    this.hideMenu();
  };

  onClickMain = () => {
    this.props.navigation.navigate('Main');
    this.hideMenu();
  };

  onClickExit = () => {
    BackHandler.exitApp();
  };

  get navigationButton() {
    let title = 'About',
        clickHandler = this.onClickAbout;
    if (this.props.route.name === 'About') {
      title = 'Main';
      clickHandler = this.onClickMain;
    }
    return <Button
      title={title}
      onPress={clickHandler}/>;
  }

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
              {this.navigationButton}
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

function MenuWrapper(props) {
  const navigation = useNavigation();
  const route = useRoute();
  return <Menu {...props} navigation={navigation} route={route}/>
}

export default MenuWrapper;

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
