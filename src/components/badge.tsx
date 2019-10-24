import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';

export function BadgeWithName() {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 32,
                maxWidth: 97,
                borderWidth: 2,
                borderColor: 'rgba(158, 150, 150, 0.5)',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
        >
            <SvgUri width='23' height='23' source={require('../assets/logo-who-agency.svg')} />
            <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 16, color: 'grey' }}>WHO</Text>
        </View>
    );
}

export function Badge() {
    return (
        <View
            style={{
                flexDirection: 'row',
                height: 40,
                width: 40,
                borderWidth: 2,
                borderColor: 'rgba(158, 150, 150, 0.5)',
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <SvgUri width='30' height='30' source={require('../assets/logo-who-agency.svg')} />
        </View>
    );
}
