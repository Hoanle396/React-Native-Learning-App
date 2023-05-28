import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { chatAPI } from '../../../axios.config'
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

    async sendMessage(mess) {
        this.setState((prestate) => ({
            messages: GiftedChat.append(prestate.messages, mess)
        }))
        let message = mess[0].text;
        await chatAPI.post('/chat', { msg: message })
            .then(({ text }) => this.handleChat({ text }))
            .catch(() => this.handleChat({ text: "Xin lỗi tôi đang gặp chút sự cố" }))
    }
    onReply = async (reply) => {
        this.setState((prestate) => ({
            messages: GiftedChat.append(prestate.messages, reply)
        }))
        let message = reply[0].value;
        await chatAPI.post('/chat', { msg: message })
            .then(({ text }) => this.handleChat({ text }))
            .catch(() => this.handleChat({ text: "Xin lỗi tôi đang gặp chút sự cố" }))
    }

    handleChat({ text }) {
        if (text == "TOI-KHONG-HIEU") text = "Tôi chưa được train về vấn đề này."
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