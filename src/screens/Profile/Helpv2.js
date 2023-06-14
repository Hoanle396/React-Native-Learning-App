import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {chatAPI} from '../../../axios.config';
import {route} from '../../../env';
const avatarBot = require('../../assets/study.png');
const BOT = {
  _id: 2,
  name: 'Study Bot',
  avatar: avatarBot,
};

const Help = ({navigation}) => {
  const [messages, setMessage] = useState([
    {_id: 2, text: 'My name is Study Bot', createdAt: new Date(), user: BOT},
    {_id: 1, text: 'Hi !', createdAt: new Date(), user: BOT},
  ]);

  const sendMessage = mess => {
    setMessage(prev => [...GiftedChat.append(prev, mess)]);
    let message = mess[0].text;
    chatAPI
      .post('/chat', {msg: message})
      .then(({text}) => handleChat({text}))
      .catch(() => handleChat({text: 'Xin lỗi tôi đang gặp chút sự cố'}));
  };
  const onReply = reply => {
    setMessage(prev => [...GiftedChat.append(prev, reply)]);
    let message = reply[0].value;
    chatAPI
      .post('/chat', {msg: message})
      .then(({text}) => handleChat({text}))
      .catch(() => handleChat({text: 'Xin lỗi tôi đang gặp chút sự cố'}));
  };

  const handleChat = ({text}) => {
    if (route.findIndex(item => item == text) > -1) {
      let msg = {
        _id: messages.length + 1,
        text: 'Bot đang điều hướng ...',
        createdAt: new Date(),
        user: BOT,
      };
      setMessage(prev => [...GiftedChat.append(prev, [msg])]);
      setTimeout(() => {
        navigation.navigate(text);
      }, 2000);
      return;
    }
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT,
    };
    setMessage(prev => [...GiftedChat.append(prev, [msg])]);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <GiftedChat
        messages={messages}
        onSend={sendMessage}
        onQuickReply={onReply}
        user={{_id: 1}}
      />
    </View>
  );
};

export default Help;
