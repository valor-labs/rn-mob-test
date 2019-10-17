import React from 'react';
import { CardItem, Card, H3, Body, View, Text, Icon } from 'native-base';
import { MyBadge } from './badge';

export function MyCard() {
    return (
        <Card style={{ width: 330, height: 112 }}>
            <CardItem style={{ backgroundColor: '#ECF1F4', flex: 1 }}>
                <Body style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', height: 90 }}>
                        <H3>Guesthouse 1</H3>
                        <Text style={{ color: 'grey' }}>Afghanistan, Kabul</Text>
                        <MyBadge />
                    </View>
                    <Icon name='home'></Icon>
                </Body>
            </CardItem>
        </Card>
    );
}
