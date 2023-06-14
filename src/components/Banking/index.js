import React from 'react';
import {Text, View} from 'react-native';

const Banking = ({data}) => {
  return (
    <View
      style={{
        width: '95%',
        height: 100,
        backgroundColor: '#FFFF',
        marginTop: 10,
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 18,
            margin: 5,
          }}>
          {new Date(data.time).toUTCString().slice(0, 25)}
        </Text>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 18,
            margin: 5,
          }}>
          {data.note}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: '#000',
            fontSize: 15,
            margin: 5,
          }}>
          Amount
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            margin: 5,
          }}>
          {data.amount} VND
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            color: '#000',
            fontSize: 15,
            margin: 5,
          }}>
          After
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            margin: 5,
          }}>
          {data.after} VND
        </Text>
      </View>
    </View>
  );
};

export default Banking;
