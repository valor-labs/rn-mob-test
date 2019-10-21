import { View } from 'react-native';
import React from 'react';

export function Line() {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ backgroundColor: '#D8D9DB', height: 1, flex: 1, alignSelf: 'center' }} />
        </View>
    );
}
