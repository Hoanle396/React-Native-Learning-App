import VideoPlayer from 'expo-video-player';
import { Center } from 'native-base';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Lession from '../../components/Mylession';
export default function Learning({ route, navigation }) {
   const { url, row } = route.params;
   const [state, setState] = useState(url);
   return (
      <View style={{ width: '100%', height: '100%', paddingTop: 40, backgroundColor: "#FFFFEE" }}>
         <VideoPlayer
            videoProps={{
               shouldPlay: false,
               source: {
                  uri: state,
               },
            }}
            style={{
               height: 250
            }}
            fullscreen
             />
         <ScrollView style={{ width: "100%", height: "100%", marginTop: 50 }} >
            <Center w="100%">
               <View style={{ paddingBottom: 30 }}><Text style={{ fontSize: 30, color: "#000000", fontWeight: "bold" }}>{row.title}</Text></View>
               {row.detail.map((item, index) => <Lession
                  key={index} id={index + 1}
                  description={item.description}
                  pressed={() => setState(item.lessonUrl)} /> || <Text>no content</Text>)}
            </Center>
         </ScrollView>
      </View>)
}