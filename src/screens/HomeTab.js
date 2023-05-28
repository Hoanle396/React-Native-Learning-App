import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen, PersonScreen, TrendScreen, WalletScreen } from '../navigation/tabNavigation'
import { FontAwesome5 as Icon } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'

          // } else if (route.name === 'Trend') {
          //   iconName = 'fire';
        }
        else if (route.name === 'Person') {
          iconName = 'user';
        }
        else if (route.name === 'Wallet') {
          iconName = 'wallet';
        }

        // You can return any component that you like here!
        return <Icon
          name={iconName}
          size={size}
          color={color}
          onPress={() => {
            navigation.navigate(route.name);
          }}
        />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false
    })} >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      {/* <Tab.Screen name="Trend" component={TrendScreen} /> */}
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Person" component={PersonScreen} />
    </Tab.Navigator>
  );
}