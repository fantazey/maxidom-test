import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import Menu from "../components/Menu";
import Screen from "../components/Screen";

function TextBlock(props) {
  return <View style={styles.block}>
    <Text style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>
      {props.children}
    </Text>
  </View>
}

export default class About extends React.Component {
  render() {
    return <Screen>
      <TextBlock>App name: {Constants.manifest.name}</TextBlock>
      <TextBlock>Device: {Constants.deviceName}</TextBlock>
      <TextBlock>App version: {Constants.nativeAppVersion}</TextBlock>
      <ScrollView style={styles.container}>
        <TextBlock>Тестовое мобильное приложение на платформе React-Native:</TextBlock>
        <TextBlock>1. При загрузке отобразить картинку </TextBlock>
        <TextBlock>2. Отобразить на главном окне программы следующие элементы:
          {'\n\t'}
          * строка текстового ввода;
          {'\n\t'}
          * кнопка Добавить;
          {'\n\t'}
          * кнопка Обнулить;
          {'\n\t'}
          * список;
          {'\n\t'}
          * кнопка Меню;
        </TextBlock>
        <TextBlock>
          3. при нажатии кнопки Добавить, значение из поля Ввода должно добавить в начало Списка и обнулить само поле Ввода.
          При пустом значении должно выдать сообщение о не корректности ввода;
        </TextBlock>
        <TextBlock>
          4. при нажатии кнопки Обнулить, обнулить значение в элементе Список.
        </TextBlock>
        <TextBlock>
          5. при нажатии кнопки Меню, отобразить меню из 2-х пунктов:
          {'\n\t'}
          * о программе - при выборе отобразить сообщение с информацией о программе;
          {'\n\t'}
          * выход - завершить работу приложения;
        </TextBlock>
      </ScrollView>
      <Menu />
    </Screen>;
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    backgroundColor: '#bbb'
  },
  block: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    display: 'flex',
    alignSelf: 'flex-start',
  }
});
