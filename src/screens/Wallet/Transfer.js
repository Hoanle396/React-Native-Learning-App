import {AntDesign as Icon} from '@expo/vector-icons';
import {Center, FormControl, Input} from 'native-base';
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import axios from '../../../axios.config';
import Loadding from '../../components/Loadding';
import {selectUser} from '../../redux/auth';
const Transfer = ({route, navigation}) => {
  const [loading, setLoading] = useState(false);
  const {money} = useSelector(selectUser);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  const handlerEmail = () => {
    setError(null);
    setName(null);
    axios
      .get('/auth/email/' + email)
      .then(response => {
        setName(
          response.data.user.firstName + ' ' + response.data.user.lastName,
        );
      })
      .catch(error => {
        console.log(error.response.data.message);
        setError(error.response.data.message);
      });
  };
  const handlerAmount = () => {
    setError(null);
    if (money < amount) {
      setError("You don't have enough balance");
    }
    if (amount <= 0) {
      setError('Amount must be other than 0');
    }
  };
  const handlerContinue = () => {
    if (!email || !name || !amount) {
      setError('Please enter a valid');
    } else {
      navigation.navigate('checktrans', {
        email: email,
        name: name,
        amount: amount,
        message: message,
      });
    }
  };
  if (loading) {
    return <Loadding />;
  } else {
    return (
      <ImageBackground
        source={require('../../assets/hinhnen.png')}
        style={{
          width: '100%',
          height: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FEE180',
            marginTop: 0,
            marginHorizontal: 0,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30,
          }}>
          <View>
            <Text
              style={{
                color: '#345c74',
                fontSize: 25,
                width: 250,
                marginTop: 70,
                paddingRight: 100,
              }}>
              {money} VND
            </Text>
          </View>
          <Icon
            name="wallet"
            color="#FF0000"
            size={100}
            style={{
              marginLeft: 0,
              marginTop: 0,
            }}
          />
        </View>
        <ScrollView
          style={{
            width: '100%',
            height: '100%',
            marginTop: 50,
          }}>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: '#000000',
                fontWeight: 'bold',
                marginLeft: 30,
              }}>
              To
            </Text>
          </View>

          <Center w="90%">
            {error && (
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#ff0000',
                }}>
                {error}
              </Text>
            )}
            <FormControl style={{marginLeft: '10%'}}>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                value={email}
                onChangeText={e => {
                  setEmail(e);
                }}
                onBlur={handlerEmail}
                type="email"
                borderRadius="10"
                bgColor="#FFFFFF"
                placeholder="Email"
              />
            </FormControl>
            <FormControl style={{marginLeft: '10%'}}>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={name}
                onChangeText={e => {
                  setName(e);
                }}
                editable={false}
                borderRadius="10"
                bgColor="#FFFFFF"
                placeholder="Name"
              />
            </FormControl>
            <FormControl style={{marginLeft: '10%'}}>
              <FormControl.Label>Amount</FormControl.Label>
              <Input
                value={amount}
                onChangeText={e => {
                  setAmount(e);
                }}
                onBlur={handlerAmount}
                keyboardType="numeric"
                borderRadius="10"
                bgColor="#FFFFFF"
                placeholder="Amount"
              />
            </FormControl>
            <FormControl style={{marginLeft: '10%'}}>
              <FormControl.Label>Message</FormControl.Label>
              <Input
                value={message}
                onChangeText={e => {
                  setMessage(e);
                }}
                borderRadius="10"
                bgColor="#FFFFFF"
                placeholder="Message"
              />
            </FormControl>
            <FormControl
              style={{
                marginLeft: '10%',
                marginTop: 50,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 250,
                  height: 50,
                  backgroundColor: error ? '#8e8e8e' : '#000cff',
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                disabled={error ? true : false}
                onPress={handlerContinue}>
                <View>
                  <Text
                    style={{
                      fontSize: 24,
                      color: '#fe6767',
                      fontWeight: 'bold',
                    }}>
                    Countinue
                  </Text>
                </View>
              </TouchableOpacity>
            </FormControl>
          </Center>
        </ScrollView>
      </ImageBackground>
    );
  }
};
export default Transfer;
