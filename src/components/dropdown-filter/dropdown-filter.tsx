import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

type Props = {
    title: string;
    onPress: Function;
};

export function DropDownFilter(props: Props) {
    const { title, onPress } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                width: 161,
                height: 40,
                borderColor: '#9EA5AD',
                borderRadius: 4,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 8,
            }}
        >
            <Text style={{ fontSize: 15 }}>{title}</Text>
            <IconButton icon='chevron-down' color='grey' />
        </TouchableOpacity>
    );
}
