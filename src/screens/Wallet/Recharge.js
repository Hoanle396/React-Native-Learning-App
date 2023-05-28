import { Box, Button, Divider, FormControl, Input, VStack } from 'native-base';
import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import axiosInstance from '../../../axios.config';
import Loadding from '../../components/Loadding';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth';

const Recharge = ({ route, navigation }) => {
  const { money } = useSelector(selectUser)
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  const handlerRecharge = () => {
    setError(null)
    if (amount < 10000) {
      setError('Minimum amount is 10000')
    }
    else {
      setLoading(true)
      axiosInstance.post('/wallet/recharge', { amount: amount })
        .then(async response => {
          navigation.navigate('banking', { amount: amount, uuid: response.data.result.uuid })
        })
        .catch(error => {
          setError(error.message)
        })
        .finally(() => {
          setLoading(false)
        })

    }
  }
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
            <Text style={{ fontSize: 24, color: "#676767ff" }}>Recharge</Text>
            {error && <Text style={{
              marginLeft: 20,
              fontSize: 24,
              fontWeight: "bold",
              color: "#ff0000"
            }}>{error}</Text>}
            <FormControl style={{}}>
              <FormControl.Label>Amount</FormControl.Label>
              <Input
                value={amount.toLocaleString()}
                onChangeText={(e) => { setAmount(e) }}
                keyboardType="numeric"
                borderRadius="10"
                bgColor="#FFFFFF"
                placeholder="Amount" />

            </FormControl>
            <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
              <Button onPress={() => { setAmount(50000) }} style={{ margin: 2, backgroundColor: "#666666" }}>50.000</Button>
              <Button onPress={() => setAmount(100000)} style={{ margin: 2, backgroundColor: "#666666" }}>100.000</Button>
              <Button onPress={() => setAmount(200000)} style={{ margin: 2, backgroundColor: "#666666" }}>200.000</Button>
              <Button onPress={() => setAmount(500000)} style={{ margin: 2, backgroundColor: "#666666" }}>500.000</Button>
              <Button onPress={() => setAmount(1000000)} style={{ margin: 2, backgroundColor: "#666666" }}>1.000.000</Button>
            </View>
            <TouchableOpacity onPress={handlerRecharge} style={{ backgroundColor: "#FF5050", borderRadius: 15, marginTop: 10, maxWidth: 100, height: 50, flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 18, color: "#676767ff" }}>Recharge</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

export default Recharge