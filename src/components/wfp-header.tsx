import React from 'react';
import { Appbar } from 'react-native-paper';

type IProps = {
    title: string;
    goBack?: Function;
};

export function WFPHeader(props: IProps) {
    const { goBack, title } = props;
    return (
        <Appbar.Header theme={{ colors: { primary: '#D8D9DB' } }} style={{ elevation: 1 }}>
            <Appbar.BackAction onPress={() => goBack && goBack()} color='black' />
            <Appbar.Content title={title} color='black' />
        </Appbar.Header>
    );
}
