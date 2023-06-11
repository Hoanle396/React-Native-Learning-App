import React, { useState, useEffect } from 'react'
import { Alert, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axiosInstance from '../../axios.config'
import Lession from '../components/Lession'
import Loadding from '../components/Loadding'
const CourseDetails = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true)
  const [row, setRow] = useState(null)
  const { id } = route.params
  useEffect(() => {
    loadData()
  })
  const loadData = () => {
    axiosInstance.get('/course/' + id)
      .then((response) => {
        setRow(response.data)
      })
      .catch((error) => {
        Alert(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const handler = () => {
    axiosInstance.get('/mycourse')
      .then(res => {
        console.log(res.data)
        console.log(row.id)
        var data = res.data.find(function (ele) {
          return ele.course.id === row.id;
        });
        if (data) {
          navigation.navigate('Mycourse')
        }
        else {
          navigation.navigate('checkout', { title: row.title, id: row.id, name: "buy course", discount: row.discount })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  if (loading) {
    return (<Loadding />)
  }
  else {
    return (
      <ImageBackground
        source={require('../assets/hinhnen.png')}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
          <Text style={{
            paddingHorizontal: 20,
            fontSize: 35,
            paddingTop: 40,
            color: "#3286D7"
          }}>
            {row.title}
          </Text>

          <View style={{
            flexDirection: "row",
            backgroundColor: row.background,
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30
          }}>
            <View>
              <Text style={{
                color: "#345c74",
                fontSize: 20,
                width: 250,
                paddingRight: 100
              }}>
                Start learning
              </Text>
              <TouchableOpacity
                onPress={() => handler()}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#f58084",
                  alignItems: "center",
                  marginTop: 20,
                  width: 150,
                  paddingVertical: 10,
                  borderRadius: 10,
                  paddingHorizontal: 10
                }}
              >
                <Text style={{
                  color: "#FFF",
                  fontSize: 12
                }}>{row.discount + " VND"}</Text>
                <Image
                  source={require('../images/a3.png')}
                  style={{ marginLeft: 20, width: 8, height: 8 }}
                />
              </TouchableOpacity>
            </View>
            <Image
              source={{ uri: row.image }}
              style={{ marginLeft: -50, marginTop: 0, width: 100, height: 100 }}
            />

          </View>
          <Text style={{
            color: "#000",
            fontSize: 24,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10
          }}>Courses Content</Text>
          {row.detail.map((item, index) => <Lession key={index} id={index + 1} description={item.description} /> || <Text>no content</Text>)}

        </ScrollView>
      </ImageBackground>
    )
  }
}
export default CourseDetails
