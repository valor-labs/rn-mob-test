import React from 'react';
import { View } from 'react-native';
import { Container, Text, H1, H3, Input, Item, Button } from 'native-base';
import { loginStyle } from './login.style';
import { TestRoutes } from '../../common/constants/routes';

export function LoginScreen({ navigation }: any) {
    return (
        <Container style={loginStyle.wrapper}>
            <View style={loginStyle.logo}>
                <H1>Logo</H1>
            </View>
            <View>
                <H3>Login</H3>
            </View>
            <View style={loginStyle.loginWrapper}>
                <Item regular style={loginStyle.inputContainer}>
                    <Input
                        placeholder='Email'
                        style={loginStyle.inputStyle}
                        autoCompleteType='email'
                        keyboardType='email-address'
                    />
                </Item>
                <Button block dark style={loginStyle.button} onPress={() => navigation.navigate(TestRoutes.List)}>
                    <Text>Continue</Text>
                </Button>
            </View>
        </Container>
    );
}

export default LoginScreen;
