import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import { IconButton, Title } from 'react-native-paper';
import { Spacer } from '../spacer';

type Props = {
    title: string;
    icon: string;
    onPress: Function;
};

export function LocationDropDown(props: Props) {
    const { title, icon, onPress } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 56,
                backgroundColor: '#E5E6E7',
                borderRadius: 5,
            }}
        >
            <IconButton icon={icon} />
            <Title>{title}</Title>
            <Spacer />
            <IconButton icon='chevron-down' />
        </TouchableOpacity>
    );
}
