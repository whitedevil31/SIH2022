import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

//mport Icon from 'react-native-vector-icons/MaterialCommunityIcons';

var deviceWidth = Dimensions.get('window').width;

export default function dashboard({navigation}) {
  const appplications = [
    {
      name: "addhaar",
      image: "../../assets/images/h1.png",
      
    },
    
  ];
  return (
    <View style={{backgroundColor: '#EFFFFD'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#4DEAEA',
          width: Dimensions.get('window').width,
          height: Dimensions.get('screen').height / 14,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/images/icon2.png')} style={{}} />
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginVertical: 15}}>
        <Text
          style={{
            textAlign: 'center',
            alignItems: 'center',
            color: 'gray',
            fontSize: 30,
            fontFamily: 'OpenSans',
            marginHorizontal: 35,

            fontSize: 15,
            fontWeight: 'bold',

            fontFamily: 'OpenSans',
          }}>
          Connected Applications
        </Text>
      </View>
      <View style={{backgroundColor:'#EFFFFD', height: Dimensions.get('screen').height / 1.5,borderColor:'red',borderWidth:1}}>
{/* scrollview */}
<ScrollView>
  
</ScrollView>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
        <View
          style={{
            flex: 1 / 3,
            backgroundColor: '#FAFAFA',
            height: 80,
            // marginTop: Dimensions.get('screen').height - 450,
            //alignItems:'flex-end',position:'absolute',alignSelf:'flex-end',marginTop:deviceWidth
          }}>
          <View
            style={{
              flex: 1 / 2,
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('qr');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 60,
                backgroundColor: '#49FFF4',
                borderRadius: 16,
                marginTop: 20,
                width: Dimensions.get('window').width * 0.87,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#393737',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: 'OpenSans',
                }}>
                Add Application +
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
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
