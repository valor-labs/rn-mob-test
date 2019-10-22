import React from 'react';
import { Appbar } from 'react-native-paper';

type IProps = {
    goBack?: Function;
};

export function MyHeader(props: IProps) {
    const { goBack } = props;
    return (
        <Appbar.Header theme={{ colors: { primary: '#D8D9DB' } }} style={{ elevation: 1 }}>
            <Appbar.BackAction onPress={() => goBack && goBack()} color='black' />
            <Appbar.Content title='Header' color='black' />
        </Appbar.Header>
    );
}
