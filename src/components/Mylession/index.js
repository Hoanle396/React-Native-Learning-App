import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'


const Lession = (props) => {
   const { id, description, pressed } = props
   return (<TouchableOpacity
      style={{
         flexDirection: "row",
         backgroundColor: "#FFFFFF",
         marginHorizontal: 20,
         borderRadius: 10,
         alignItems: "center",
         marginTop: 5
      }}
      onPress={pressed}
   >
      <View>
         <Text style={{
            color: "#345c74",
            fontSize: 18,
            paddingHorizontal: 20,
            width: 300
         }}>{id + ". " + description}</Text>

      </View>
      <ProgressCircle
         percent={10}
         radius={17}
         borderWidth={1.5}
         color="f580084"
         shadowColor="#FFF"
         bgColor="#FFF"
      >
         <Image
            source={require('../../images/pl.png')}
         />
      </ProgressCircle>

   </TouchableOpacity>
   )
}
export default Lession