import { Center } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Alert, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from '../../../axios.config'
import Icon from 'react-native-ionicons'
import Loadding from '../../components/Loadding'
import CourseList from '../../components/CourseList'
import { selectUser } from '../../redux/auth'
import { useSelector } from 'react-redux'
export default function Mycourse({ route, navigation }) {


  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const { firstName: firstname, lastName: lastname, avatarUrl: avt } = useSelector(selectUser)
  useEffect(() => {
    axios.get('/mycourse')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(error => {
        Alert.alert(error.message)
      })
  }, [])
  if (loading) {
    return <Loadding />
  }
  else {
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
        <ScrollView style={{ width: "100%", height: "100%", marginTop: 50 }} >
          <Center w="100%">
            <View style={{ paddingBottom: 30 }}><Text style={{ fontSize: 30, color: "#000000", fontWeight: "bold" }}>My Course</Text></View>
            {data && data.map((item, index) => <CourseList key={index}
              id={item.course.id}
              img={item.course.image}
              title={item.course.title}
              bg={item.course.background}
              onPress={() => navigation.navigate('mylession', { id: item.course.id, data: data })} />)}
          </Center>
        </ScrollView>
      </ImageBackground>
    )
  }
}
