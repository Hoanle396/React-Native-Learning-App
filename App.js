import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, extendTheme } from "native-base";
import HomeScreen from './src/screens/HomeTab';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import Learning from './src/screens/Profile/Learning';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import { store } from './src/redux';
const Stack = createNativeStackNavigator();


const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });
const App = () => {

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" >
            <Stack.Screen
              name="Splash"
              options={{ animationEnabled: false, header: () => null }}
              component={SplashScreen}
            />
            <Stack.Screen
              name="Login"
              options={{ animationEnabled: true, header: () => null }}
              component={Login}
            />
            <Stack.Screen
              name="Home"
              options={{ animationEnabled: true, headerTitle: null, header: () => null }}
              component={HomeScreen}
            />

            <Stack.Screen
              name="learning"
              options={{ animationEnabled: true, headerTitle: null, header: () => null }}
              component={Learning} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};



export default App;
