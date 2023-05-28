import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'


export default CourseList = (props) => {
   const { img, title, bg, onPress } = props
   return (
      <TouchableOpacity
         onPress={onPress}
         style={{
            flexDirection: "row",
            backgroundColor: bg,
            padding: 20,
            marginHorizontal: 20,
            borderRadius: 20,
            alignItems: "center",
            marginTop: 10
         }}
      >
         <Image
            source={{ uri: img }}
            style={{ width: 40, height: 40 }}
         />
         <View>
            <Text style={{
               color: "#345c74",
               fontSize: 13,
               paddingHorizontal: 20,
               width: 230
            }}>{title}</Text>

         </View>
         <ProgressCircle
            percent={30}
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