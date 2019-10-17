import React from 'react';
import { View } from 'react-native';
import { Container, Text, H1, H3, Input, Item, Button } from 'native-base';

function LoginScreen() {
    return (
        <Container style={{ flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#ECF1F4' }}>
            <View style={{ paddingTop: 65.5, paddingBottom: 32.5 }}>
                <H1>Logo</H1>
            </View>
            <View>
                <H3>Login</H3>
            </View>
            <View style={{ width: 297, paddingTop: 24 }}>
                <Item regular style={{ borderColor: 'black', marginBottom: 18, borderRadius: 4 }}>
                    <Input
                        placeholder='Email'
                        style={{ backgroundColor: 'white', height: 40, borderRadius: 4 }}
                        autoCompleteType='email'
                        keyboardType='email-address'
                    />
                </Item>
                <Button block dark style={{ borderRadius: 4 }}>
                    <Text>Continue</Text>
                </Button>
            </View>
        </Container>
    );
}

export default LoginScreen;
