import React from 'react';
import {View, Text} from 'react-native';
import Menu from "../components/Menu";
import Screen from "../components/Screen";

export default class About extends React.Component {
  render() {
    return <Screen>
      <Text>Test about page screen</Text>
      <Menu />
    </Screen>;
  }
}
