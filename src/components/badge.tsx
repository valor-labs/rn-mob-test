import React from 'react';
import { View, Text } from 'native-base';

export function MyBadge() {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 32,
                width: 97,
                borderWidth: 2,
                borderColor: 'rgba(158, 150, 150, 0.5)',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, color: 'grey' }}>UNICEF</Text>
        </View>
    );
}
