import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Caption, IconButton, Title } from 'react-native-paper';
import { Spacer } from '../spacer';
import { BadgeWithName } from '../badge';

type Props = {
    onPress?: Function;
    title: string;
    subtitle: string;
};
export function WFPCardWithImage(props: Props) {
    const { onPress, title, subtitle } = props;
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}>
            <View
                style={{
                    width: '100%',
                    height: 127,
                    marginBottom: 16,
                    padding: 9,
                    backgroundColor: '#ECF1F4',
                    borderRadius: 5,
                    flexDirection: 'column',
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 2, flex: 1 }}>
                    <View style={{ height: '100%', width: 100, marginRight: 16 }}>
                        <Image
                            source={require('../../assets/image.png')}
                            style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }}
                        />
                    </View>
                    <View>
                        <Title style={{ fontSize: 24 }}>{title}</Title>
                        <Caption style={{ fontSize: 14 }}>{subtitle}</Caption>
                        <BadgeWithName />
                    </View>
                    <Spacer />
                    <IconButton icon='home' color='grey' size={20} />
                </View>
            </View>
        </TouchableOpacity>
    );
}
