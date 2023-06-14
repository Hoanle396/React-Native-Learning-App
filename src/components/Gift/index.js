import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesome5 as Icon} from '@expo/vector-icons';
const Gift = ({data}) => {
  return (
    <View
      style={{
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 20,
      }}>
      <View style={{flexDirection: 'column'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.giftcode}</Text>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {data.sale}% decrease
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="clock" color="#000000" size={16} />
          <Text style={{fontSize: 14, marginLeft: 5}}>
            {data.startDate.slice(0, 10)}
          </Text>
          <Text style={{fontSize: 14, marginLeft: 10}}>
            {data.endDate.slice(0, 10)}
          </Text>
        </View>
      </View>
      <Icon name="gift" color="#FF00AA" size={60} style={{marginLeft: 40}} />
    </View>
  );
};

export default Gift;
