import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View} from "react-native";

export default class InputField extends React.Component {
  state = {
    input: ''
  };

  static getDerivedStateFromProps(props) {
    return {
      input: props.value
    };
  }

  onInputChange = event => {
    const val = event.target.value;
    this.setState({input: val});
    this.props.updateValue(val);
  };

  render() {
    return <View style={styles.inputRow}>
      <Text>Input text here:</Text>
      <TextInput
        value={this.state.input}
        style={styles.input}
        onChange={this.onInputChange}/>
    </View>
  }
}

const styles = StyleSheet.create({
  inputRow: {
    alignItems: 'stretch',
    marginBottom: 20,
    width: '60%'
  },
  input: {
    borderColor: '#000',
    borderWidth: 1
  }
});
