import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

//mport Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function splash({navigation}) {
  return (
    <View
      style={{flex: 1, backgroundColor: '#77FFFF', justifyContent: 'center'}}>
      <View>
        <Image
          source={require('../assets/images/icon.png')}
          style={{margin: 20, alignSelf: 'center', marginBottom: 0}}
          resizeMode="contain"
        />
        <Text
          style={{
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: 40,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'gray',
            marginHorizontal: 25,
          }}>
          Welcome to a faster and safer OTP experience
        </Text>
      </View>
    </View>
  );
}
