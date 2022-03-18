import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import { styles} from '../../styles/styles'

export default function intro ({navigation}){
    return (
<View style={{flex: 1,backgroundColor:'#EFFFFD', 
          alignItems: 'center',}}>
<View style={{backgroundColor: 'white',
            marginHorizontal: 55,
            marginTop: 55,
            borderRadius:15,
            //shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            padding:25,
            shadowOpacity: 2.5,
            shadowRadius: 3,
            elevation: 8,
           borderRadius:20, justifyContent: 'center',
           width:221,
           alignItems: 'center',}}>


<Image
            source={require('../../assets/images/Vector.png')}

            style={{ alignSelf: 'center',}}
            resizeMode="contain"
          />
          
          </View>
          <View style={{ marginTop:20 }}>
          <Text style={{textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight:"bold",
    fontFamily: 'OpenSans',
    marginHorizontal:20,
    color: 'black',}}>
         OffTP
          </Text>
          </View>
          <View style={{flex:1,marginTop:251,alignItems: 'center',justifyContent: 'center',}}>
          {/* <View style={{ flex: 1 / 4,alignItems: 'center',justifyContent: 'center', }}> */}
         
          <Text style={styles.text}>
          Uninterrupted OTP anytime anywhere
          </Text>
        {/* </View> */}
        <View style={{ marginTop:28 }}>
          <Text style={styles.text2}>
          Say no to the traditional way of sms otp and experience the new era of OffTP
          </Text>
          
        </View>
          </View>
        <TouchableOpacity style={{alignItems: 'center',justifyContent:'center',flex:1}}
onPress={()=>{navigation.navigate('mobileNo')}}
>
{/* <View style={styles.arrow}> */}
    <Text style={styles.title}>{'>>'}</Text>
    
{/* </View> */}
</TouchableOpacity>
</View>
    )
}
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
    fontSize: 25,
    fontWeight:"bold",
    fontFamily: 'OpenSans',
    marginLeft: 20,
    marginRight: 20,
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontFamily: 'OpenSans',
    marginHorizontal: 35,
    color: 'black',
  },
});
