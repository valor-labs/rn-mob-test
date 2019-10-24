import React from 'react';

import { WFPHeader } from '../../components/wfp-header';
import { View, FlatList } from 'react-native';
import { WFPCard } from '../../components/wfp-card/wfp-card';
import { DropDownFilter } from '../../components/dropdown-filter/dropdown-filter';
import { ListRoutes, TestRoutes } from '../../common/constants/routes';

// tslint:disable-next-line: no-any
export function ListScreen({ navigation }: any) {
    const title: string = navigation.getParam('title');
    return (
        <View style={{ flex: 1, paddingBottom: 160 }}>
            <WFPHeader title={title} goBack={navigation.pop} />
            <View
                style={{
                    flexDirection: 'row',
                    paddingLeft: 25,
                    paddingRight: 25,
                    justifyContent: 'space-between',
                    marginTop: 15,
                }}
            >
                <DropDownFilter title='Choose city' onPress={goToCityFilter} />
                <DropDownFilter title='Choose agency' onPress={goToAgencyFilter} />
            </View>

            <View style={{ padding: 16 }}>
                <FlatList
                    contentContainerStyle={{
                        marginTop: 15,
                    }}
                    data={[1, 2, 3]}
                    renderItem={({ index }) => (
                        <WFPCard
                            title='Kabul'
                            flag
                            agencies={[1, 2]}
                            key={index}
                            onPress={() => handlePress(`Kabul, ${title}`)}
                        />
                    )}
                />
            </View>
        </View>
    );

    function goToCityFilter() {
        navigation.navigate(ListRoutes.Location, { type: 'city' });
    }
    function goToAgencyFilter() {
        navigation.navigate(ListRoutes.Agency, { type: 'agency' });
    }
    function handlePress(_title: string) {
        navigation.navigate(TestRoutes.AccommodationList, { title: _title });
    }
}
