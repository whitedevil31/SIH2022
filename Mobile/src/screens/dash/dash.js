import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function dash() {
  const Data = {
    userID: 'dfdfdf',
    phoneNumber: '324324',
  };

  // juicy
  //   const USER_1 = {
  //     name: 'Tom',
  //     age: 20,
  //     traits: {
  //       hair: 'black',
  //       eyes: 'blue',
  //     },
  //   };
  //   const Data = ['Watha Lavde Ka Baal'];

  console.log(Data);

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('secret', JSON.stringify(Data));
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('secret');
      console.log(jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Text>hi</Text>
      <TouchableOpacity onPress={storeData}>
        <Text>Verify Here!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getData}>
        <Text>chek Here!</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default dash;
