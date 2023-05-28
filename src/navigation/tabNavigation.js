import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen'
import CourseDetails from '../screens/CourseDetails'
import Checkout from '../screens/Checkout'
import Setting from '../screens/Profile'
import WalletHome from '../screens/Wallet'
import Mycourse from '../screens/Profile/mycourse';
import Mylession from '../screens/Profile/mylession';
// import Learning from '../screens/Profile/Learning';
import MyGift from '../screens/Profile/MyGift';
import Help from '../screens/Profile/Helpv2';
import Transfer from '../screens/Wallet/Transfer';
import Success from '../screens/Checkout/success';
import Error from '../screens/Checkout/error';
import Checktrans from '../screens/Wallet/checkout';

import Recharge from '../screens/Wallet/Recharge'
import Banking from '../screens/Wallet/Banking';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={CourseDetails} />
      <HomeStack.Screen name="checkout" component={Checkout} />
      <HomeStack.Screen name="success" component={Success} />
      <HomeStack.Screen name="failed" component={Error} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

export function PersonScreen() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={Setting} />
      <SettingsStack.Screen name="Mycourse" component={Mycourse} />
      <SettingsStack.Screen name="mylession" component={Mylession} />
      {/* <SettingsStack.Screen name="learning" component={Learning}/> */}
      <SettingsStack.Screen name="mygift" component={MyGift} />
      <SettingsStack.Screen name="help" component={Help} />
    </SettingsStack.Navigator>
  );
}


const Wallet = createNativeStackNavigator();
export function WalletScreen() {
  return (
    <Wallet.Navigator screenOptions={{ headerShown: false }}>
      <Wallet.Screen name="Wallet" component={WalletHome} />
      <Wallet.Screen name="recharge" component={Recharge} />
      <Wallet.Screen name="banking" component={Banking} />
      <Wallet.Screen name="transfer" component={Transfer} />
      <Wallet.Screen name="checktrans" component={Checktrans} />
    </Wallet.Navigator>
  )
}

// const Trend = createNativeStackNavigator();
// export function TrendScreen() {
//   return (
//     <Trend.Navigator screenOptions={{headerShown: false}}>
//     <Trend.Screen name="Trend" component={TrendHome}/>
//     </Trend.Navigator>
//   )
// }