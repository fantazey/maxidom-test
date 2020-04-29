import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  Alert
} from 'react-native';
import ItemsList from "./components/ItemsList";
import InputField from "./components/InputField";
import Menu from "./components/Menu";

export default class App extends React.Component {

  state = {
    input: '',
    lastId: 29,
    items: [
      {id: 1, text: 'text1'},
      {id: 2, text: 'text2'},
      {id: 3, text: 'text3'},
      {id: 4, text: 'text4'},
      {id: 5, text: 'text5'},
      {id: 6, text: 'text6'},
      {id: 7, text: 'text7'},
      {id: 8, text: 'text8'},
      {id: 9, text: 'text9'},
      {id: 10, text: 'text10'},
      {id: 11, text: 'text11'},
      {id: 12, text: 'text12'},
      {id: 13, text: 'text13'},
      {id: 14, text: 'text14'},
      {id: 15, text: 'text15'},
      {id: 16, text: 'text16'},
      {id: 17, text: 'text17'},
      {id: 18, text: 'text18'},
      {id: 19, text: 'text19'},
      {id: 20, text: 'text20'},
      {id: 21, text: 'text21'},
      {id: 22, text: 'text22'},
      {id: 23, text: 'text23'},
      {id: 24, text: 'text24'},
      {id: 25, text: 'text25'},
      {id: 26, text: 'text26'},
      {id: 27, text: 'text27'},
      {id: 28, text: 'text28'},
      {id: 29, text: 'text29'},
    ],
  };

  onClickAddItem = () => {
    const items = [...this.state.items];
    const {input, lastId} = this.state;
    if (input.length === 0) {
      Alert.alert(
        'Error',
        'Field shouldn\'t be empty',
        [
          {
            text: 'Close',
            style: 'cancel'
          }
        ],
        {cancellable: false}
      );
      return;
    }
    items.splice(0,0, {id: lastId + 1, text: input});
    this.setState({
      input: '',
      items: items,
      lastId: lastId + 1
    });
  };

  onClickResetList = () => {
    this.setState({
      items: []
    })
  };

  updateValue = input => {
    this.setState({input});
  };

  removeItem = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    const newItems = [
      ...items.slice(0, index),
      ...items.slice(index+1, items.length)
    ];
    this.setState({
      items: newItems
    });
  };

  render() {
    const {items, input} = this.state;
    return (
      <View style={styles.container}>
        <InputField value={input} updateValue={this.updateValue} />
        <View style={[styles.buttonsRow]}>
          <Button
            style={styles.button}
            onPress={this.onClickAddItem}
            title="Add item"/>
          <Button
            style={styles.button}
            onPress={this.onClickResetList}
            title="Reset list"/>
        </View>
        <View style={styles.listContainer}>
          <ItemsList items={items} remove={this.removeItem}/>
        </View>
        <Menu />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: 'column'
  },
  buttonsRow: {
    width: '100%',
    alignItems: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 50,
    marginBottom: 20,
    justifyContent: 'space-around',
    zIndex: 0
  },
  listContainer: {
    maxHeight: 300,
    width: '100%'
  }
});
