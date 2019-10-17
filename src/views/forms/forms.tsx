// import { SafeAreaView } from 'react-native';
import React from 'react';
import { FromMeForm } from './for-me-form';
import { Container, Header, Tabs, Tab, Title, Body, Footer, Button, Text } from 'native-base';

export function Forms() {
    return (
        <Container>
            <Header hasTabs style={{ backgroundColor: '#D8D9DB' }}>
                <Body>
                    <Title style={{ color: 'black' }}>Header</Title>
                </Body>
            </Header>
            <Tabs tabBarUnderlineStyle={{ backgroundColor: 'black' }}>
                <Tab
                    heading='For me'
                    tabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTextStyle={{ color: 'black' }}
                >
                    <FromMeForm />
                </Tab>
                <Tab
                    heading='For guest'
                    tabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTabStyle={{ backgroundColor: '#D8D9DB' }}
                    activeTextStyle={{ color: 'black' }}
                >
                    <FromMeForm />
                </Tab>
            </Tabs>
            <Footer
                style={{
                    shadowOpacity: 0.14,
                    shadowRadius: 4,
                    shadowColor: 'black',
                    shadowOffset: { height: 0, width: 0 },
                }}
            >
                <Button block dark style={{ width: 328, height: 40, marginTop: 15, borderRadius: 4 }}>
                    <Text>Send request</Text>
                </Button>
            </Footer>
        </Container>
    );
}
