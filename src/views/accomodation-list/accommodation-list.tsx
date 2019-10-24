import * as React from 'react';
import { WFPHeader } from '../../components/wfp-header';
import { SectionList, View } from 'react-native';
import { Title } from 'react-native-paper';
import { WFPCardWithImage } from '../../components/wfp-card-with-image/wfp-card-with-image';
import { TestRoutes } from '../../common/constants/routes';

// tslint:disable-next-line:no-any
export function AccommodationList({ navigation }: any) {
    const title: string = navigation.getParam('title');

    return (
        <View style={{ flex: 1, paddingBottom: 160 }}>
            <WFPHeader title={title} goBack={navigation.pop} />
            <View style={{ padding: 16 }}>
                <SectionList
                    stickySectionHeadersEnabled={false}
                    sections={[
                        {
                            data: [1, 2, 3],
                        },
                    ]}
                    renderItem={({ index }) => (
                        <WFPCardWithImage title='Kabul' subtitle={title} key={index} onPress={handlePress} />
                    )}
                    keyExtractor={(item, index) => item + index}
                    renderSectionHeader={() => <Title style={{ fontSize: 28 }}>Accommodation</Title>}
                />
            </View>
        </View>
    );

    function handlePress() {
        navigation.navigate(TestRoutes.Detail, { title });
    }
}
