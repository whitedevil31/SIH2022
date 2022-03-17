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

import OTPInputView from '@twotalltotems/react-native-otp-input';

//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function otp({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Icon name="close" size={24} color="#848484" onPress={()=>{}}/> */}

            <View>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
                X
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.headertitle}>Verify Phone</Text>
          </View>
          <View style={{width: 20}} />
        </View>
        <View style={{marginTop: 30}}>
          <View style={{marginTop: 10}}>
            <Text style={styles.text2}>Code is sent to 894 534 6789</Text>
          </View>
          <View style={styles.container2}>
            <OTPInputView
              pinCount={6}
              style={styles.otpView}
              codeInputFieldStyle={styles.underlineStyleBase}
              onCodeFilled={value => {
                console.log(value);
              }}
            />
          </View>

          <View style={{marginTop: 60}}>
            <TouchableOpacity style={styles.text2}>
              <Text style={{fontSize: 18}}>Didn't recieve code? </Text>

              <Text style={styles.text3}>Get via a call</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity
              //onPress={_onLoginPressed}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 60,
                backgroundColor: '#00e0d3',
                // backgroundColor: '#49FFF4',
                borderRadius: 16,
                marginTop: 20,
                width: Dimensions.get('window').width * 0.87,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'OpenSans',
                }}>
                Verify and Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#EFFFFD',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headertitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  iconheader: {
    color: 'gray',
  },
  text2: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'gray',
    fontSize: 18,
    fontFamily: 'OpenSans',
    marginHorizontal: 35,
  },
  text3: {
    textAlign: 'center',
    alignItems: 'center',
    color: 'gray',
    fontSize: 18,
    fontFamily: 'OpenSans',
    marginHorizontal: 35,
    fontWeight: 'bold',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  otpView: {
    width: '80%',
    height: 200,
    color: 'black',
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 0,
    borderRadius: 7,
    borderWidth: 1,
    color: 'black',
    fontSize: 25,
    borderColor: '#efefef',
    backgroundColor: '#efefef',
    marginHorizontal: -5,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
});
