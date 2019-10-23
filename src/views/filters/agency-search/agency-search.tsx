import React from 'react';
import { View, TextInput, SectionList } from 'react-native';
import { CheckboxFilterRow } from '../../../components/checkbox-filter-row/checkbox-filter-row';
import SvgUri from 'react-native-svg-uri';
import { Footer } from '../../../components/footer';
import { Button } from 'react-native-paper';

type Props = {
    searchValue: string;
    updateSearchValue: Function;
    // tslint:disable-next-line:no-any
    navigation: any;
};
export function AgencySearch(props: Props) {
    const { searchValue, updateSearchValue, navigation } = props;

    const DATA = [
        {
            data: ['WHO', 'WHO', 'WHO'],
        },
    ];

    const type: string = navigation.getParam('type');
    return (
        <View style={{ flex: 1 }}>
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
            <SectionList
                stickySectionHeadersEnabled={false}
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, paddingLeft: 16 }}>
                        <SvgUri width='40' height='40' source={require('../../../assets/logo-who-agency.svg')} />
                        <CheckboxFilterRow title={item} />
                    </View>
                )}
                renderSectionHeader={() => <CheckboxFilterRow title='Select all' />}
            />
            <Footer>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                    <Button mode='text' theme={{ colors: { primary: 'grey' } }}>
                        Clear
                    </Button>
                    <Button mode='text' theme={{ colors: { primary: 'black' } }}>
                        Apply
                    </Button>
                </View>
            </Footer>
        </View>
    );
}
