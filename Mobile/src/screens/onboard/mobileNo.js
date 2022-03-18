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

export default function mobileNo({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Icon name="close" size={24} color="#848484" onPress={()=>{}}/> */}

            <View>
              <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
                {'<'}
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.headertitle}>Continue with Phone</Text>
          </View>
          <View style={{width: 20}} />
        </View>
        <Image
          source={require('../../assets/images/hand.png')}
          style={{marginHorizontal: 20, marginTop:15, alignSelf: 'center', marginBottom: 0}}
          resizeMode="contain"
        />
        <View style={{marginTop:15}}>
          <Text style={styles.text2}>
            You'll receive a 4 digit code to verify next.
          </Text>
        </View>
        <View
          style={{
            
            // backgroundColor: '#ffffee',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 20,

            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            width: Dimensions.get('window').width,
            shadowOpacity: 2.5,
            shadowRadius: 3,
            elevation: 5,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              margin: 20,
            }}>
            <TextInput
              label="Number"
              keyboardType={'phone-pad'}
              // returnKeyType="next"
              //value={email.value}
              placeholder="Enter your phone"
              placeholderTextColor="gray"
              //onChangeText={text => setEmail({value: text, error: ''})}

              style={{
                fontWeight: '400',
                fontSize: 18,
                
                color: 'black',
                height: 60,
                marginHorizontal: 6,
                width: Dimensions.get('window').width * 0.5,
                marginRight: 30,
                backgroundColor: 'white',

                borderRadius: 8,
                paddingLeft: 15,
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#00e0d3',
                height: 60,
                borderRadius: 16,
                justifyContent: 'center',

                //marginHorizontal: 6,
              }}
              onPress={() => {
                navigation.navigate('otp');
              }}>
              <Text style={styles.text2}>Continue</Text>
            </TouchableOpacity>
            <View style={{width: 20}} />
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
    fontSize: 30,
    fontFamily: 'OpenSans',
    marginHorizontal: 35,

    fontSize: 15,
    fontWeight: 'bold',

    fontFamily: 'OpenSans',
  },
});
