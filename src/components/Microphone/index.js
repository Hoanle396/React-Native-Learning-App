import React, { Component, useEffect, useState } from 'react'
import { Dialogflow_V2 } from 'react-native-dialogflow'
import { config } from '../../../env'
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { PermissionsAndroid, TouchableOpacity } from 'react-native';

class Microphone extends Component {
    state = {
        status: false
    }
    async componentDidMount() {
        const { status, expires, permissions } = await PermissionsAndroid.askAsync(
            Permissions.AUDIO_RECORDING
        );
        if (status !== "granted") {
            this.setState({ status: false });
        } else {
            this.setState({ status: true });
        }
        Dialogflow_V2.setConfiguration(
            config.client_email,
            config.private_key,
            Dialogflow_V2.LANG_ENGLISH,
            config.project_id
        )
    }
    render() {
        return (
            <TouchableOpacity onPress={() => {

                Dialogflow_V2.onListeningStarted(() => console.log("start"))

                Dialogflow_V2.onListeningCanceled(() => console.log("cancel"))

                Dialogflow_V2.onListeningFinished(() => console.log("finished"))

                Dialogflow_V2.startListening(result => {

                    console.log(result);
                }, error => {
                    console.log(error);
                });
            }
            }
            >
                <Icon name="microphone" size={30} color={this.state.status ? "#ff1111" : "#eeeeee"} />
            </TouchableOpacity >
        )
    }
}

export default Microphone