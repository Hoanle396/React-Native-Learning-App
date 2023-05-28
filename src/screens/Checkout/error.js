import { Box, Center, Heading } from 'native-base'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import error from '../../assets/x-button.png'
const Error = () => {
   const [date, setDate] = useState(new Date())
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
            </View>
         </Center>
      </View>
   )
}

export default Error