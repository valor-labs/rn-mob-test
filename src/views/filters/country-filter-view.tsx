import React from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function CountryFilterView() {
    return (
        <>
            <View style={{ height: 100, backgroundColor: '#D8D9DB' }}>
                <TextInput
                    autoFocus
                    placeholder='Select Country'
                    placeholderTextColor='black'
                    style={{ height: 123, paddingLeft: 22, fontSize: 20 }}
                />
            </View>
            <FlatList
                data={['Afghanistan', 'Algeria', 'Bangladesh', 'Benin']}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Text style={{ fontSize: 16, padding: 16 }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </>
    );
}
