import { View } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';
import React from 'react';

type Props = {
    title: string;
};

export function CheckboxFilterRow(props: Props) {
    const { title } = props;
    return (
        <View
            style={{
                marginTop: 16,
                marginBottom: 16,
                marginLeft: 16,
                paddingRight: 16,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(33, 33, 33, 0.2)',
            }}
        >
            <Text style={{ fontSize: 16 }}>{title}</Text>
            <Checkbox theme={{ colors: { accent: 'black' } }} status='checked' onPress={() => {}} />
        </View>
    );
}
