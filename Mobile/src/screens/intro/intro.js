import React from 'react';
import {View , Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
//import Icon from 'react-native-vector-icons/AntDesign';
//import { styles} from '../../styles/styles'

export default function intro ({navigation}){
    return (
<View style={{flex: 1,backgroundColor:'#EFFFFD',}}>

<Image
            source={require('../../assets/images/pic.png')}

            style={{ margin: 20, alignSelf: 'center', marginBottom: 0 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1 / 4, }}>
          <Text style={styles.text}>
          Do You Bill My Card
          </Text>
        </View>
        <View style={{ flex: 1 / 4, }}>
          <Text style={styles.text2}>
          We will never bill your card. We earn from services and not from users.
          </Text>
          <TouchableOpacity style={{alignItems: 'center',marginTop:10}}
onPress={()=>{navigation.navigate('mobileNo')}}
>
{/* <View style={styles.arrow}> */}
    <Text style={styles.title}>{'>>'}</Text>
    
{/* </View> */}
</TouchableOpacity>
        </View>
        
</View>
    )
}
const styles = StyleSheet.create({
    arrow:{
        flex:1 / 4,
        //justifyContent :'flex-end',
        alignItems: 'flex-end',
        backgroundColor:'white',

    },
    title: { 
        fontSize:36,
       // marginBottom:16,
        color: 'gray',
    },
    text: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontFamily: 'OpenSans',
    marginLeft:20,
    marginRight:20,color: 'black',
      },
      text2: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontFamily: 'OpenSans',
    marginHorizontal:35,
    color: 'black',
      },
  
  })
  
