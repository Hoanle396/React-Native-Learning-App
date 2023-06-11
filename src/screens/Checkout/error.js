import { Button, Center } from 'native-base'
import React from 'react'
import { Image, Text, View } from 'react-native'
import error from '../../assets/x-button.png'
const Error = ({ navigation }) => {
   return (
      <View style={{
         flex: 1,
         width: '100%',
         height: '100%',
         alignItems: "center",
      }}>
         <Center w="100%">
            <Image source={error} resizeMode="cover" style={{
               width: 89,
               height: 89,
               top: 74,
               marginTop: 50,
            }} alt="logo" />
            <View style={{ marginTop: 150, alignItems: "center", justifyContent: "center" }} >
               <Text style={{ fontSize: 24, color: "#FF0000" }}>Checkout Failed</Text>
               <Text style={{ fontSize: 18, color: "#676767ff", marginTop: 20 }}>Please try again later</Text>
               <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate("Home")} >
                  <Text style={{ fontSize: 18, color: "#FFFFFF" }}>Go back</Text>
               </Button>
            </View>
         </Center>
      </View>
   )
}

export default Error