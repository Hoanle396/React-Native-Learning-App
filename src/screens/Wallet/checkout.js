import React, {useEffect, useState} from 'react';
import {Center, FormControl, Input} from 'native-base';
import {
  Alert,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesome5 as Icon} from '@expo/vector-icons';
import axios from '../../../axios.config';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser, setMoney} from '../../redux/auth';
const Checktrans = ({route, navigation}) => {
  const [fee, setFee] = useState(0);
  const {
    firstName: firstname,
    lastName: lastname,
    avatarUrl: avt,
    money,
  } = useSelector(selectUser);
  const dispatch = useDispatch();
  const {amount, name, email, message} = route.params;
  const [newdiscount, setNewDiscount] = useState(Number(amount) + fee);

  const handleTrans = () => {
    axios
      .post('/wallet/transfer', {
        email: email,
        amount: newdiscount,
        message: message,
      })
      .then(async response => {
        dispatch(setMoney(money - newdiscount));
        navigation.navigate('success');
      })
      .catch(error => {
        console.log(error);
        navigation.navigate('failed');
      });
  };
  const showConfirmDialog = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to send this?',
      [
        {
          text: 'Yes',
          onPress: () => handleTrans(),
        },
        {
          text: 'No',
        },
      ],
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/hinhnen.png')}
      style={{width: '100%', height: '100%'}}>
      <View
        style={{
          marginTop: 0,
          marginHorizontal: 0,
          borderRadius: 20,
          paddingVertical: 20,
          paddingLeft: 30,
        }}>
        <View>
          <Text
            style={{
              color: '#345c74',
              fontSize: 25,
              width: 250,
            }}>
            Wallet
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#f6f6f6ff',
            borderWidth: 0.7,
            bodyColor: '#777777',
            width: '95%',
            height: 70,
            marginTop: 10,
            borderRadius: 15,
            paddingHorizontal: 15,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="wallet" size={50} color="#FE1111" />
              <Text style={{marginLeft: 10, fontSize: 18, color: '#676767ff'}}>
                My Wallet
              </Text>
            </View>
            <Text style={{fontSize: 15, color: '#0000ff'}}>{money} VND</Text>
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          width: '100%',
          maxHeight: 400,
          backgroundColor: '#FFF',
          borderRadius: 20,
          marginTop: 20,
        }}>
        <View
          style={{
            paddingLeft: 30,
          }}>
          <Text
            style={{
              color: '#345c74',
              fontSize: 25,
              width: 250,
            }}>
            Transaction detail
          </Text>
        </View>
        <Center w="100%">
          <View
            style={{
              backgroundColor: '#f6f6f6ff',
              borderWidth: 0.5,
              borderColor: '#777777',
              width: '100%',
              height: 50,
              marginTop: 10,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: '#676767ff'}}>Service</Text>
              <Text style={{fontSize: 18, color: '#676767ff'}}>Transfer</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#f6f6f6ff',
              width: '100%',
              height: 50,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: '#676767ff'}}>From</Text>
              <Text style={{fontSize: 18, color: '#676767ff'}}>
                {firstname + ' ' + lastname}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#f6f6f6ff',
              width: '100%',
              height: 50,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: '#676767ff'}}>To</Text>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, color: '#676767ff'}}>{name}</Text>
                <Text style={{fontSize: 14, color: '#676767ff'}}>{email}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#f6f6f6ff',
              width: '100%',
              height: 50,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: '#676767ff'}}>Amount</Text>
              <Text style={{fontSize: 18, color: '#676767ff'}}>
                {amount} VND
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#f6f6f6ff',
              borderBottomWidth: 0.5,
              borderColor: '#777777',
              width: '100%',
              height: 50,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: '#676767ff'}}>Fee</Text>
              <Text style={{fontSize: 18, color: '#676767ff'}}>
                {fee == 0 ? 'free' : fee}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#f6f6f6ff',
              borderWidth: 0.5,
              bodyColor: '#777777',
              width: '100%',
              height: 50,
              marginTop: 10,
              paddingHorizontal: 15,
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, color: '#676767ff'}}>Total</Text>
              <Text style={{fontSize: 18, color: '#676767ff'}}>
                {newdiscount} VND
              </Text>
            </View>
          </View>
        </Center>
      </ScrollView>
      <Center style={{paddingTop: 30}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#0099ff',
            width: '65%',
            height: 50,
            borderRadius: 15,
            paddingHorizontal: 15,
            justifyContent: 'center',
          }}
          onPress={() => showConfirmDialog()}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="lock" size={30} />
            <Text style={{marginLeft: 20, fontSize: 24, color: '#0000ff'}}>
              Transfer
            </Text>
          </View>
        </TouchableOpacity>
      </Center>
    </ImageBackground>
  );
};
export default Checktrans;
