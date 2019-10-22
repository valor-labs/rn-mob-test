import React from 'react';
import { WFPHeader } from '../../components/wfp-header';
import { PendingCard } from '../../components/pending-card/pending';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { bookService } from './book-service.style';
import { serviceMock } from '../../common/mocks/services.mock';
import { ServiceCard } from '../../components/service-card/service-crad';
import { TestRoutes } from '../../common/constants/routes';

// tslint:disable-next-line:no-any
export function BookService({ navigation }: any) {
    return (
        <>
            <WFPHeader title='Book Service' />
            <View style={bookService.container}>
                <PendingCard />
                <FlatList
                    data={serviceMock}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ marginTop: 16 }} onPress={() => handlePress(item.name)}>
                            <ServiceCard title={item.name} icon={item.icon} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </>
    );

    function handlePress(title: string) {
        navigation.navigate(TestRoutes.CountryList, { title });
    }
}
