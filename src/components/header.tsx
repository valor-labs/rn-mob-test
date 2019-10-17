import React from 'react';

import { Left, Button, Icon, Title, Body, Right, Header } from 'native-base';

interface IProps {
    goBack: Function;
}

export function MyHeader(props: IProps) {
    return (
        <Header style={{ backgroundColor: '#D8D9DB' }}>
            <Left>
                <Button transparent onPress={() => props.goBack()}>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Header</Title>
            </Body>
            <Right />
        </Header>
    );
}
