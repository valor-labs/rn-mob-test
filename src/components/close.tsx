import React from 'react';
import { IconButton } from 'react-native-paper';

// tslint:disable-next-line: no-any
export const Close = ({ onPress }: any) => {
    console.log(onPress);
    return <IconButton icon='close' onPress={() => onPress()} />;
};
