import {Center} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Loadding from '../../components/Loadding';
import axiosInstance from '../../../axios.config';
import Lession from '../../components/Mylession';
export default function Mylession({route, navigation}) {
  const [loading, setLoading] = useState(true);
  const [row, setRow] = useState(null);
  const {id} = route.params;
  useEffect(() => {
    loadData();
  });
  const loadData = () => {
    axiosInstance
      .get('/course/' + id)
      .then(response => {
        setRow(response.data);
      })
      .catch(error => {
        Alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  if (loading) {
    return <Loadding />;
  } else {
    return (
      <ImageBackground
        source={require('../../assets/hinhnen.png')}
        style={{width: '100%', height: '100%'}}>
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
              {row.title}
            </Text>
          </View>
          <Image
            source={{uri: row.image}}
            style={{marginLeft: -30, marginTop: 0, width: 100, height: 100}}
          />
        </View>
        <ScrollView style={{width: '100%', height: '100%', marginTop: 50}}>
          <Center w="100%">
            <View style={{paddingBottom: 30}}>
              <Text
                style={{fontSize: 30, color: '#000000', fontWeight: 'bold'}}>
                {row.title}
              </Text>
            </View>
            {row.detail.map(
              (item, index) =>
                (
                  <Lession
                    key={index}
                    id={index + 1}
                    description={item.description}
                    pressed={() =>
                      navigation.navigate('learning', {
                        url: item.lessonUrl,
                        row: row,
                      })
                    }
                  />
                ) || <Text>no content</Text>,
            )}
          </Center>
        </ScrollView>
      </ImageBackground>
    );
  }
}
