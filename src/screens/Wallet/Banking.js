import { FormControl, Input } from 'native-base';
import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import axiosInstance from '../../../axios.config';
import Loadding from '../../components/Loadding';
import { selectUser } from '../../redux/auth';
import { useSelector } from 'react-redux';

const Banking = ({ route, navigation }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { money } = useSelector(selectUser)
  const { amount, uuid } = route.params;
  if (loading) {
    return <Loadding />
  }
  else {
    return (
      <ImageBackground
        source={require('../../assets/hinhnen.png')}
        style={{
          width: "100%",
          height: "100%"
        }}>
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
            }}>{money} VND
            </Text>
          </View>
          <Icon name="wallet" color="#FF0000" size={100}
            style={{
              marginLeft: 0,
              marginTop: 0
            }} />
        </View>
        <ScrollView style={{
          width: "100%",
          height: "100%",
          marginTop: 50,
          flex: 1,
        }} >
          <View style={{
            flexDirection: "column",
            backgroundColor: "#FEE180",
            marginTop: 50,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 20,
            padding: 30
          }}>
            <Text style={{ fontSize: 24, color: "#676767ff" }}>Banking</Text>
            {error && <Text style={{
              marginLeft: 20,
              fontSize: 24,
              fontWeight: "bold",
              color: "#ff0000"
            }}>{error}</Text>}

            <View style={{ marginTop: 20, flexDirection: 'column' }}>
              <FormControl >
                <FormControl.Label>To Bank Number </FormControl.Label>
                <Input
                  value="0998928888"
                  fontSize={20}
                  borderRadius="10"
                  editable={false}
                  bgColor="#FFFFFF" />
              </FormControl>
              <FormControl >
                <FormControl.Label>Bank Name </FormControl.Label>
                <Input
                  value="MBBank"
                  fontSize={20}
                  borderRadius="10"
                  editable={false}
                  bgColor="#FFFFFF" />
              </FormControl>
              <FormControl >
                <FormControl.Label>Bank Auth </FormControl.Label>
                <Input
                  value="LE HUU HOAN"
                  fontSize={20}
                  borderRadius="10"
                  editable={false}
                  bgColor="#FFFFFF" />
              </FormControl>
              <FormControl >
                <FormControl.Label>Discount </FormControl.Label>
                <Input
                  value={amount.toLocaleString()}
                  fontSize={20}
                  borderRadius="10"
                  editable={false}
                  bgColor="#FFFFFF" />
              </FormControl>
              <FormControl >
                <FormControl.Label>Message(*) </FormControl.Label>
                <Input
                  value={uuid.toLocaleString()}
                  fontSize={20}
                  borderRadius="10"
                  editable={false}
                  bgColor="#FFFFFF" />
              </FormControl>
              <View style={{
                marginTop: 10,
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}>
                <TouchableOpacity style={{
                  backgroundColor: "#FF5050",
                  borderRadius: 15,
                  marginTop: 10,
                  maxWidth: 100,
                  height: 50,
                  flex: 1,
                  paddingHorizontal: 10,
                  justifyContent: "center",
                  alignItems: "center"
                }} onPress={() => navigation.navigate('Home')}>
                  <Text style={{ fontSize: 18, color: "#676767ff" }}>Recharge</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

export default Banking