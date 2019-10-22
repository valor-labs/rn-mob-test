import React from 'react';
import { WFPHeader } from '../../components/wfp-header';
import { PendingCard } from '../../components/pending-card/pending';
import { View, FlatList } from 'react-native';
import { bookService } from './book-service.style';
import { serviceMock } from '../../common/mocks/services.mock';
import { ServiceCard } from '../../components/service-card/service-crad';

export function BookService() {
    return (
        <>
            <WFPHeader title='Book Service' />
            <View style={bookService.container}>
                <PendingCard />
                <FlatList
                    data={serviceMock}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 16 }}>
                            <ServiceCard title={item.name} icon={item.icon} />
                        </View>
                    )}
                />
            </View>
        </>
    );
}
