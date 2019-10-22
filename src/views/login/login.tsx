import React from 'react';
import { View } from 'react-native';
import { loginStyle } from './login.style';
import { TestRoutes } from '../../common/constants/routes';
import { Button, Title, Headline, TextInput } from 'react-native-paper';

export function LoginScreen({ navigation }: any) {
    return (
        <View style={loginStyle.wrapper}>
            <View style={loginStyle.logo}>
                <Headline>Logo</Headline>
            </View>
            <Title>Login</Title>
            <View style={loginStyle.loginWrapper}>
                <TextInput
                    mode='outlined'
                    placeholder='Email'
                    style={loginStyle.inputStyle}
                    theme={{ colors: { primary: 'black' } }}
                    autoCompleteType='email'
                    keyboardType='email-address'
                ></TextInput>
                <Button
                    color='black'
                    mode='contained'
                    style={loginStyle.button}
                    onPress={() => navigation.navigate(TestRoutes.BookService)}
                >
                    Continue
                </Button>
            </View>
        </View>
    );
}

export default LoginScreen;
