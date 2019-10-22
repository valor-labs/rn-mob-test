import React from 'react';

import { MyHeader } from '../../components/header';
import { MyCard } from '../../components/card';
import { TestRoutes } from '../../common/constants/routes';
import { View, FlatList } from 'react-native';

// tslint:disable-next-line: no-any
export function ListScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1 }}>
            <MyHeader goBack={navigation.pop} />
            <FlatList
                contentContainerStyle={{ alignItems: 'center', paddingTop: 50 }}
                data={[1, 2, 3, 4, 5, 6, 7, 8]}
                renderItem={() => <MyCard onPress={() => navigation.navigate(TestRoutes.Detail)} />}
            />
        </View>
    );
}
