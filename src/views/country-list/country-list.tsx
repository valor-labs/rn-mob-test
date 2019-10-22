import React from 'react';

import { WFPHeader } from '../../components/wfp-header';
import { MyCard } from '../../components/card';
import { CountryListRoutes, TestRoutes } from '../../common/constants/routes';
import { View, FlatList } from 'react-native';
import { LocationDropDown } from '../../components/location-dropdown/location-dropdown';

// tslint:disable-next-line: no-any
export function ListScreen({ navigation }: any) {
    const title: string = navigation.getParam('title');
    return (
        <View style={{ flex: 1 }}>
            <WFPHeader title={title} goBack={navigation.pop} />
            <View style={{ padding: 16 }}>
                <LocationDropDown title='Location' icon='map-marker' onPress={handelPress} />
                <FlatList
                    contentContainerStyle={{ alignItems: 'center', paddingTop: 50 }}
                    data={[1, 2, 3, 4, 5, 6, 7, 8]}
                    renderItem={() => <MyCard onPress={() => navigation.navigate(TestRoutes.Detail)} />}
                />
            </View>
        </View>
    );

    function handelPress() {
        navigation.navigate(CountryListRoutes.Location);
    }
}
