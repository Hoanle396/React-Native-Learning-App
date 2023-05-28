import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { config } from '../../../env'
import { Dialogflow_V2 } from 'react-native-dialogflow'
const avatarBot = require('../../assets/study.png')
const BOT = {
   _id: 2,
   name: 'Study Bot',
   avatar: avatarBot
}
class Help extends Component {
   state = {
      messages: [
         { _id: 2, text: "My name is Study Bot", createdAt: new Date(), user: BOT },
         { _id: 1, text: "Hi !", createdAt: new Date(), user: BOT }],
      id: 1,
      name: '',
   }


   componentDidMount() {
      Dialogflow_V2.setConfiguration(
         config.client_email,
         config.private_key,
         Dialogflow_V2.LANG_ENGLISH,
         config.project_id
      )
   }
   sendMessage(mess) {
      this.setState((prestate) => ({
         messages: GiftedChat.append(prestate.messages, mess)
      }))
      let message = mess[0].text;
      Dialogflow_V2.requestQuery(message,
         (result) => this.handlegoogle(result),
         (err) => console.log(err))
   }
   onReply = (reply) => {
      this.setState((prestate) => ({
         messages: GiftedChat.append(prestate.messages, reply)
      }))
      let message = reply[0].value;
      Dialogflow_V2.requestQuery(message,
         (result) => this.handlegoogle(result),
         (err) => console.log(err))
   }
   handlegoogle = (result) => {
      let text = result.queryResult.fulfillmentMessages[0].text.text[0]
      this.sendBotresponse(text)
   }

   sendBotresponse(text) {
      let msg = {
         _id: this.state.messages.length + 1,
         text,
         createdAt: new Date(),
         user: BOT
      }
      this.setState((premessage) => ({
         messages: GiftedChat.append(premessage.messages, [msg])
      })
      )
   }
   render() {
      return (
         <View style={{ flex: 1, backgroundColor: '#FFF' }}>
            <GiftedChat messages={this.state.messages}
               onSend={(mess) => this.sendMessage(mess)}
               onQuickReply={(reply) => this.onReply(reply)}
               user={{ _id: 1, }} />
         </View>
      )
   }
}

export default Help