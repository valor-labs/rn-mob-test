import React from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
    searchValue: string;
    updateSearchValue: Function;
    // tslint:disable-next-line:no-any
    navigation: any;
};
export function TextSearch(props: Props) {
    const { searchValue, updateSearchValue, navigation } = props;
    const type: string = navigation.getParam('type');
    return (
        <>
            <View style={{ height: 100, backgroundColor: '#D8D9DB' }}>
                <TextInput
                    autoFocus
                    placeholder={`Select ${type}`}
                    placeholderTextColor='black'
                    style={{ height: 123, paddingLeft: 22, fontSize: 20 }}
                    value={searchValue}
                    onChangeText={(text: string) => updateSearchValue(text)}
                />
            </View>
            <FlatList
                data={['Afghanistan', 'Algeria', 'Bangladesh', 'Benin']}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                        <Text style={{ fontSize: 16, padding: 16 }}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </>
    );
}
