import React from 'react';

import { WFPHeader } from '../../components/wfp-header';
import { ListRoutes, TestRoutes } from '../../common/constants/routes';
import { View, FlatList } from 'react-native';
import { LocationDropDown } from '../../components/location-dropdown/location-dropdown';
import { WFPCard } from '../../components/wfp-card/wfp-card';

// tslint:disable-next-line: no-any
export function ListScreen({ navigation }: any) {
    const title: string = navigation.getParam('title');
    return (
        <View style={{ flex: 1, paddingBottom: 160 }}>
            <WFPHeader title={title} goBack={navigation.pop} />
            <View style={{ padding: 16, width: '100%' }}>
                <LocationDropDown title='Location' icon='map-marker' onPress={handelPress} />
                <FlatList
                    contentContainerStyle={{
                        marginTop: 15,
                        width: '100%'
                    }}
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ index }) => (
                        <WFPCard
                            title='Afghanistan'
                            flag
                            agencies={[1, 2, 3, 4, 5]}
                            key={index}
                            onPress={() => navigation.navigate(TestRoutes.CityList, { title: 'Afghanistan' })}
                        />
                    )}
                />
            </View>
        </View>
    );

    function handelPress() {
        navigation.navigate(ListRoutes.Location, { type: 'country' });
    }
}
