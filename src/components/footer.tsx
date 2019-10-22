import { View } from 'native-base';
import React from 'react';

// tslint:disable-next-line: no-any
export function Footer({ children }: any) {
    return (
        <View
            style={{
                backgroundColor: 'white',
                shadowColor: 'black',
                shadowOpacity: 0.2,
                shadowRadius: 2,
                // elevation: 2,
                height: 70,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {children}
        </View>
    );
}
