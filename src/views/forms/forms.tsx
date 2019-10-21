// import { SafeAreaView } from 'react-native';
import React from 'react';
import { FromMeForm } from './for-me-form';
import { Container, Header, Tabs, Tab, Title, Body, Footer, Button, Text, Left, Icon, Right } from 'native-base';

export function Forms({ navigation }: any) {
    return (
        <Container>
            <Header hasTabs noShadow style={{ backgroundColor: '#D8D9DB' }}>
                <Left>
                    <Button transparent onPress={() => navigation.pop()}>
                        <Icon style={{ color: 'black' }} ios='close' android='close' name='close' type='AntDesign' />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ color: 'black' }}>Header</Title>
                </Body>
                <Right />
            </Header>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
                <Tab
                    heading='For me'
                    tabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTextStyle={{ color: 'black' }}
                    textStyle={{ color: 'black' }}
                >
                    <FromMeForm navigation={navigation} />
                </Tab>
                <Tab
                    heading='For guest'
                    tabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTextStyle={{ color: 'black' }}
                    textStyle={{ color: 'black' }}
                >
                    <FromMeForm navigation={navigation} />
                </Tab>
            </Tabs>
            <Footer
                style={{
                    borderColor: 'transparent', // Required to show shadows on Android for some reason !?!?
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    backgroundColor: 'white',
                    elevation: 15,
                    minHeight: 70,
                }}
            >
                <Button block dark style={{ width: 328, height: 40, marginTop: 20, borderRadius: 4 }}>
                    <Text>Send request</Text>
                </Button>
            </Footer>
        </Container>
    );
}
