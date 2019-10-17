import React from 'react';
import { Container, Content, List } from 'native-base';
import { MyHeader } from '../../components/header';
import { MyCard } from '../../components/card';
import { AuthRoutes } from '../../common/constants/routes';

export function ListScreen({ navigation }: any) {
    return (
        <Container>
            <MyHeader goBack={navigation.pop} />
            <Content>
                <List style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <MyCard onPress={() => navigation.navigate(AuthRoutes.Form)} />
                    <MyCard />
                    <MyCard />
                </List>
            </Content>
        </Container>
    );
}
