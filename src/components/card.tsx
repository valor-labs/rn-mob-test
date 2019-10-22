import React from 'react';
import { MyBadge } from './badge';
import { TouchableOpacity, View } from 'react-native';
import { Card, Text, Title, IconButton } from 'react-native-paper';

type Props = {
    onPress?: Function;
};
export function MyCard(props: Props) {
    const { onPress } = props;
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}>
            <Card style={{ width: 330, height: 112, marginBottom: 16 }}>
                <Card.Content
                    style={{
                        backgroundColor: '#ECF1F4',
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', height: 90 }}>
                        <Title>Guesthouse 1</Title>
                        <Text style={{ color: 'grey' }}>Afghanistan, Kabul</Text>
                        <MyBadge />
                    </View>
                    <IconButton icon='home' color='grey' size={20} />
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
}
