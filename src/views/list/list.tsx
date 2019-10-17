import React from 'react';
import { Container } from 'native-base';
import { MyHeader } from '../../components/header';

export function ListScreen({ navigation }: any) {
    return (
        <Container>
            <MyHeader goBack={navigation.pop} />
        </Container>
    );
}
