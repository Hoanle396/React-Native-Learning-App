import { Box, Center, Heading } from 'native-base'
import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import success from '../../assets/checked.png'
const Success = () => {
   const [date, setDate] = useState(new Date())
   return (
      <View style={{
         flex: 1,
         width: '100%',
         height: '100%',
         alignItems: "center",
      }}>
         <Center w="100%">
            <Image source={success} resizeMode="cover" style={{
               width: 89,
               height: 89,
               top: 74,
               marginTop: 50,
            }} alt="logo" />
            <View style={{ marginTop: 150, alignItems: "center", justifyContent: "center" }} >
               <Text style={{ fontSize: 24, color: "#00ad34" }}>Checkout Successful</Text>
               <Text style={{ fontSize: 18, color: "#676767ff", marginTop: 20 }}>Thank you</Text>
            </View>
         </Center>
      </View>
   )
}

export default Success