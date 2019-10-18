import { View, Button, Text } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

// tslint:disable-next-line: no-any
export function CalendarModal({ navigation }: any) {
    return (
        <TouchableOpacity
            onPress={() => navigation.pop()}
            activeOpacity={1}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, .5)',
                flex: 1,
            }}
        >
            <TouchableOpacity onPress={() => console.log(2)} activeOpacity={1}>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 200,
                        width: 200,
                    }}
                >
                    <Text style={{ fontSize: 30 }}>This is a modal!</Text>
                    <Button onPress={() => navigation.goBack()}>
                        <Text>Dismiss</Text>
                    </Button>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}
