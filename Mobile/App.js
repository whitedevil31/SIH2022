import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import intro from './src/screens/intro/intro';
import mobileNo from './src/screens/onboard/mobileNo';
import otp from './src/screens/onboard/otp';
import QRScan from './src/screens/qr/qr';
import dash from './src/screens/dash/dash';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="intro"
          component={QRScan}
          options={{
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
