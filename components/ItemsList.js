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
  return <View style={styles.itemContainer}>
    <TouchableHighlight style={styles.itemHighlight}>
      <View style={styles.itemInner}>
        <View style={{width: '90%'}}>
          <Text style={styles.itemText} numberOfLines={1}>
            {item.text}
          </Text>
        </View>
        <View style={styles.removeIconWrapper}>
          <TouchableHighlight underlayColor="#ddd" onPress={onPress} style={styles.itemCloseTouch}>
            <Image source={closeIcon} style={styles.itemImage}/>
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
  itemHighlight: {
    backgroundColor: '#f3f3f3',
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  itemContainer: {
    paddingLeft: 10,
    marginVertical: 5
  },
  itemText: {
    display: 'flex',
    fontSize: 17,
    fontWeight: '200',
  },
  itemImage: {
    height: '100%',
    width: '100%'
  },
  itemInner: {
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemCloseTouch: {
    height: '100%',
    width: '100%',
  },
  removeIconWrapper: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end'
  }
});
