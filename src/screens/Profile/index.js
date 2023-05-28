import { Center } from 'native-base';
import React, { useEffect, useState } from 'react';

import { AsyncStorage, Image, ImageBackground, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout as rdlogout, selectUser } from '../../redux/auth';
const Setting = ({ route, navigation }) => {
   const { firstName: firstname, lastName: lastname, avatarUrl: avt } = useSelector(selectUser)
   const dispatch = useDispatch()
   const logout = async () => {
      dispatch(rdlogout())
      navigation.navigate('Login')
   }
   return (
      <ImageBackground
         source={require('../../assets/hinhnen.png')}
         style={{ width: "100%", height: "100%" }}>

         <View style={{
            flexDirection: "row",
            backgroundColor: "#FEE180",
            marginTop: 0,
            marginHorizontal: 0,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30
         }}>
            <View>
               <Text style={{
                  color: "#345c74",
                  fontSize: 25,
                  width: 250,
                  marginTop: 70,
                  paddingRight: 100
               }}>
                  {firstname + " " + lastname}
               </Text>
            </View>
            <Image
               source={{ uri: avt }}
               style={{ marginLeft: -30, marginTop: 0, width: 100, height: 100, borderRadius: 50, }}
            />

         </View>
         <ScrollView style={{ width: "100%", height: "100%", marginTop: 100 }} >
            <Center w="100%">
               {/* <TouchableOpacity style={{
                  backgroundColor: "#f6f6f6ff",
                  borderWidth: 0.7,
                  bodyColor: "#777777",
                  width: "95%",
                  height: 50,
                  marginTop: 10,
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  justifyContent: "center"
               }}>
                  <View style={{
                     flexDirection: "row",
                     marginHorizontal: 10,
                     alignItems: "center",
                  }}>
                     <Icon name='user' size={30} color="#FE1111" />
                     <Text style={{ marginLeft: 20, fontSize: 18, color: "#676767ff" }}>My Profile</Text>
                  </View>
               </TouchableOpacity> */}
               <TouchableOpacity style={{
                  backgroundColor: "#f6f6f6ff",
                  borderWidth: 0.7,
                  bodyColor: "#777777",
                  width: "95%",
                  height: 50,
                  marginTop: 5,
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  justifyContent: "center"
               }}
                  onPress={() => navigation.navigate('Wallet')}
               >
                  <View style={{
                     flexDirection: "row",
                     marginHorizontal: 10,
                     alignItems: "center",
                  }}>
                     <Icon name='wallet' size={30} color="#02b200" />
                     <Text style={{ marginLeft: 20, fontSize: 18, color: "#676767ff" }}>My Wallet</Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={{
                  backgroundColor: "#f6f6f6ff",
                  borderWidth: 0.7,
                  bodyColor: "#777777",
                  width: "95%",
                  height: 50,
                  marginTop: 5,
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  justifyContent: "center"
               }}
                  onPress={() => navigation.navigate('Mycourse')}
               >
                  <View style={{
                     flexDirection: "row",
                     marginHorizontal: 10,
                     alignItems: "center",
                  }}>
                     <Icon name='book-open' size={30} color="#02b200" />
                     <Text style={{ marginLeft: 20, fontSize: 18, color: "#676767ff" }}>My Course</Text>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity style={{
                  backgroundColor: "#f6f6f6ff",
                  borderWidth: 0.7,
                  bodyColor: "#777777",
                  width: "95%",
                  height: 50,
                  marginTop: 5,
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  justifyContent: "center"
               }}
                  onPress={() => navigation.navigate('mygift')}>
                  <View style={{
                     flexDirection: "row",
                     marginHorizontal: 10,
                     alignItems: "center",
                  }}>
                     <Icon name='gift' size={30} color="#ff2200" />
                     <Text style={{ marginLeft: 20, fontSize: 18, color: "#676767ff" }}>Gift</Text>
                  </View>
               </TouchableOpacity>

                  <TouchableOpacity style={{
                     backgroundColor: "#f6f6f6ff",
                     borderWidth: 0.7,
                     bodyColor: "#777777",
                     width: "95%",
                     height: 50,
                     marginTop: 5,
                     borderRadius: 15,
                     paddingHorizontal: 15,
                     justifyContent: "center"
                  }}
                     onPress={() => navigation.navigate('help')}>
                     <View style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        alignItems: "center",
                     }}>
                        <Icon name='hands-helping' size={30} color="#00bfff" />
                        <Text style={{ marginLeft: 20, fontSize: 18, color: "#676767ff" }}>Help</Text>
                     </View>
                  </TouchableOpacity>
               <TouchableOpacity style={{
                  backgroundColor: "#f6f6f6ff",
                  borderWidth: 0.7,
                  bodyColor: "#777777",
                  width: "95%",
                  height: 50,
                  marginTop: 5,
                  borderRadius: 15,
                  paddingHorizontal: 15,
                  justifyContent: "center"
               }}
                  onPress={logout}>
                  <View style={{
                     flexDirection: "row",
                     marginHorizontal: 10,
                     alignItems: "center",
                  }}>
                     <Icon name='sign-out-alt' size={30} color="#FF0000" />
                     <Text style={{ marginLeft: 20, fontSize: 18, color: "#676767ff" }}>Log Out</Text>
                  </View>
               </TouchableOpacity>
            </Center>
         </ScrollView>


      </ImageBackground>
   );
};

export default Setting;