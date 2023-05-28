// expo install expo-web-browser expo-auth-session ex
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { Box, Center, Heading, Image, VStack } from "native-base";
import React from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import axiosInstance from '../../axios.config';
import googleIM from '../assets/google.jpg';
import ImageBg from '../assets/hinhnen.png';
import logo from '../assets/study.png';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/auth';
import * as SecureStore from 'expo-secure-store';

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
    const dispatch = useDispatch()

    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "970416655854-ohqqct7iesqlneu0lm8jrtmelmp4c9jj.apps.googleusercontent.com",
        iosClientId: "970416655854-ohqqct7iesqlneu0lm8jrtmelmp4c9jj.apps.googleusercontent.com",
        expoClientId: "970416655854-pp42pikachlr2g7m96tngejs8vhaacbs.apps.googleusercontent.com",
        clientSecret: "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",
        responseType: 'code'
    });

    React.useEffect(() => {
        if (response?.type === "success") {
            getUserData(response.authentication.accessToken, response.authentication.idToken);
        }
    }, [response]);

    async function getUserData(accessToken, idToken) {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        userInfoResponse.json().then(data => {
            axiosInstance.post('auth/login/google', {
                givenName: data.given_name,
                familyName: data.family_name,
                email: data.email,
                photoUrl: data.picture,
                idToken
            })
                .then(async response => {
                    dispatch(setToken(response.data.access_token))
                    dispatch(setUser({
                        money: +response.data.user.money ?? 0,
                        firstName: response.data.user.firstName ?? "",
                        lastName: response.data.user.lastName ?? '',
                        avatarUrl: response.data.user.avatarUrl ?? '',
                    }))
                    await SecureStore.setItemAsync('access_token', response.data.access_token);
                    // await AsyncStorage.setItem('access_token', response.data.access_token);
                    // await AsyncStorage.setItem('money', "" + response.data.user.money);
                    // await AsyncStorage.setItem('firstName', response.data.user.firstName);
                    // await AsyncStorage.setItem('lastName', response.data.user.lastName);
                    // await AsyncStorage.setItem('avatarUrl', response.data.user.avatarUrl);
                    navigation.replace('Home');
                })
                .catch(error => {
                    console.log(error)
                })
        });


    }



    return (
        <ImageBackground source={ImageBg} alt="background" resizeMode="cover" style={{
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: "center",
        }}>
            <Center w="100%">
                <Image source={logo} resizeMode="cover" style={{
                    width: 89,
                    height: 89,
                    top: 74,
                    marginTop: 50,
                }} alt="logo" />
                <Box safeArea p="2" py="8" w="90%" maxW="290" top="150">
                    <Heading size="lg" fontWeight="900" color="#b3bef6" _dark={{
                        color: "warmGray.50"
                    }}>
                        Welcome
                    </Heading>
                    <Heading mt="1" _dark={{
                        color: "warmGray.200"
                    }} color="#7c83db" fontWeight="medium" size="lg">
                        Sign in to continue!
                    </Heading>

                    <VStack space={3} mt="70">
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: "#fff",
                                borderRadius: 25,
                                height: 50,
                                width: 250
                            }}
                            onPress={() => promptAsync()}>
                            <Image source={googleIM} size={8} alt="google" />
                            <Heading size="md" fontWeight="700" color="#7c83db" _dark={{
                                color: "warmGray.50"
                            }}>
                                Continue with google
                            </Heading>
                        </TouchableOpacity>
                    </VStack>
                </Box>
            </Center>
        </ImageBackground>)
}
