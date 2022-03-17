import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';

 //mport Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function mobileNo() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity>
          {/* <Icon name="close" size={24} color="#848484" onPress={()=>{}}/> */}
          <Text></Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.headertitle}>Continue with Phone</Text>
          </View>
          <View style={{width: 20}} />
        </View>
        <Image
          source={require('../../assets/images/pic.png')}
          style={{margin: 20, alignSelf: 'center', marginBottom: 0}}
          resizeMode="contain"
        />
        <View style={{}}>
          <Text style={styles.text2}>
            You'll receive a 4 digit code to verify next.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'stretch',
            marginTop: 20,
            
          }}>
          <TextInput
            label="Number"
            keyboardType={'phone-pad'}
            // returnKeyType="next"
            //value={email.value}
            placeholder="Enter your Phone"
            placeholderTextColor="#868686"
            //onChangeText={text => setEmail({value: text, error: ''})}

            style={{
              fontWeight: '400',
              fontSize: 18,
              color: '#868686',
              height: 60,
              marginHorizontal: 6,
              width:Dimensions.get('window').width * 0.5,

              backgroundColor: 'white',

              borderRadius: 8,
            }}
          />
          <View
            style={{
              borderWidth: 1,
              borderColor: 'yellow',
              backgroundColor: 'yellow',
              height: 60,
              borderRadius: 6,
              justifyContent: 'center',
              //marginHorizontal: 6,
            }}>
            <Text style={styles.text2}>Continue</Text>
          </View>
          <View style={{width: 20}} />
        </View>
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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

    fontSize: 18,
    fontFamily: 'OpenSans',
    marginHorizontal: 35,
  },
});
