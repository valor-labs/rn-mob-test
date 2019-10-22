import React from 'react';
import { Platform, View } from 'react-native';

// tslint:disable-next-line: no-any
export function Footer({ children }: any) {
    return (
        <View
            style={{
                backgroundColor: Platform.OS === 'android' ? 'transparent' : 'white',
                height: 70,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 2,
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 0.5 * 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            }}
        >
            {children}
        </View>
    );
}
