import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import { styles} from '../../styles/styles'

const intro = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity style={{alignItems: 'flex-end'}}>
        {/* <View style={styles.arrow}> */}
        <Text style={styles.title}>{'>>'}</Text>
        {/* </View> */}
      </TouchableOpacity>
      <Image
        source={require('./src/assets/images/pic.png')}
        style={{margin: 20, alignSelf: 'center', marginBottom: 0}}
        resizeMode="contain"
      />
      <View style={{flex: 1 / 4}}>
        <Text style={styles.text}>Do You Bill My Card</Text>
      </View>
      <View style={{flex: 1 / 4}}>
        <Text style={styles.text2}>
          We will never bill your card. We earn from services and not from
          users.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  arrow: {
    flex: 1 / 4,
    //justifyContent :'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 36,
    // marginBottom:16,
    color: 'gray',
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: 'OpenSans',
    marginLeft: 20,
    marginRight: 20,
  },
  text2: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontFamily: 'OpenSans',
    marginHorizontal: 35,
  },
});

export default intro;
