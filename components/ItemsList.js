import React from 'react';
import {
  Image,
  TouchableHighlight,
  StyleSheet,
  FlatList,
  Text,
  View
} from "react-native";

const closeIcon = require('../assets/close_icon.png');

function Item({item, onPress}) {
  return <View style={styles.item_container}>
    <TouchableHighlight style={styles.item_highlight}>
      <View style={styles.item_inner}>
        <Text style={styles.item_text}>
          {item.text}
        </Text>
        <View style={{height: 20, width: 20, padding: 5}}>
          <TouchableHighlight underlayColor="#ddd" onPress={onPress} style={styles.item_close_touch}>
            <Image source={closeIcon} style={styles.item_image}/>
          </TouchableHighlight>
        </View>
      </View>
    </TouchableHighlight>
  </View>;
}

export default class ItemsList extends React.Component {
  render() {
    return <View style={styles.listView}>
      <FlatList
        data={this.props.items}
        keyExtractor={item => item.id.toString()}
        renderItem={
          ({item, index}) => <Item key={`flat_list_item_${index}`}
                                   item={item}
                                   onPress={() => this.props.remove(item)}/>
        }/>
    </View>
  }
}

const styles = StyleSheet.create({
  listView: {
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30
  },
  item_highlight: {
    backgroundColor: '#f3f3f3',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  item_container: {
    paddingLeft: 10,
    marginVertical: 5
  },
  item_text: {
    display: 'flex',
    fontSize: 17,
    fontWeight: '200'
  },
  item_image: {
    height: 10,
    width: 10
  },
  item_inner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  item_close_touch: {
    height: '100%',
    width: '100%',
  }
});
