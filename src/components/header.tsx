import React from 'react';

import { Left, Button, Icon, Title, Body, Right, Header } from 'native-base';

type IProps = {
    goBack?: Function;
    transparent?: boolean;
};

export function MyHeader(props: IProps) {
    const { goBack, transparent } = props;
    return (
        <Header
            transparent={transparent}
            style={{ backgroundColor: transparent ? 'transparent' : '#D8D9DB' }}
            androidStatusBarColor='#D8D9DB'
        >
            <Left>
                {!goBack ? (
                    <></>
                ) : (
                    <Button transparent onPress={() => goBack()}>
                        <Icon style={{ color: 'black' }} ios='arrowleft' android='arrowleft' name='arrowleft' color='red' type='AntDesign' />
                    </Button>
                )}
            </Left>
            <Body>
                <Title style={{ color: 'black' }}>Header</Title>
            </Body>
            <Right />
        </Header>
    );
}
