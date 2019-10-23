import React from 'react';
import { Button } from 'react-native-paper';

type Props = {
    isVisible: boolean;
    clearSearch: Function;
};

export function ClearButton({ isVisible, clearSearch }: Props) {
    return (
        <>
            {isVisible ? (
                <Button mode='text' theme={{ colors: { primary: 'black' } }} onPress={() => clearSearch('')}>
                    Clear
                </Button>
            ) : (
                <></>
            )}
        </>
    );
}
