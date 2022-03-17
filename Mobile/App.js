import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import intro from './src/screens/intro/intro';
import mobileNo from './src/screens/onboard/mobileNo';
import otp from './src/screens/onboard/otp';
import splash from './src/screens/splash';
import dashboard from './src/screens/Dashboard/dashboard';
import QRScan from './src/screens/qr/qr';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View>
      <Image
        style={{height: 45, alignSelf: 'center'}}
        resizeMode="contain"
        source={require('./src/assets/images/icon2.png')}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="intro"
          component={intro}
          options={{
            //headerTitle: (props) => <LogoTitle {...props} />
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="mobileNo"
          component={mobileNo}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="otp"
          component={otp}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="qr"
          component={QRScan}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="splash"
          component={splash}
          options={{
            title: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="dashboard"
          component={dashboard}
          options={{
            title: null,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
