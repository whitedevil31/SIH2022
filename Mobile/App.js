import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import intro from './src/screens/intro/intro';
import mobileNo from './src/screens/onboard/mobileNo';
// import OTP from './src/screens/onboard/OTP';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="intro"
          component={intro}
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
        {/* <Stack.Screen
          name="OTP"
          component={OTP}
          options={{
            title: null,
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
