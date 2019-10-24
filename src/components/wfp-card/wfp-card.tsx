import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';
import { Spacer } from '../spacer';
import { Badge } from '../badge';

type Props = {
    onPress?: Function;
    title: string;
    agencies: number[];
    flag?: boolean;
};
export function WFPCard(props: Props) {
    const { onPress, title, agencies, flag } = props;
    return (
        <TouchableOpacity onPress={() => onPress && onPress()}>
            <View
                style={{
                    width: '100%',
                    height: 127,
                    marginBottom: 16,
                    padding: 15,
                    backgroundColor: '#ECF1F4',
                    borderRadius: 5,
                    flexDirection: 'column',
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                    {flag ? <SvgUri width='24' height='14' source={require('../../assets/flag.svg')} /> : <></>}
                    <Title style={{ fontSize: 24, marginLeft: 16 }}>{title}</Title>
                    <Spacer />
                    <Text style={{ fontSize: 20, color: 'grey' }}>7</Text>
                    <IconButton icon='home' color='grey' size={20} />
                </View>
                <FlatList
                    horizontal
                    scrollEnabled={false}
                    data={agencies}
                    renderItem={({ index }) => (
                        <View style={{ marginLeft: 8 }}>
                            <Badge key={index} />
                        </View>
                    )}
                />
            </View>
        </TouchableOpacity>
    );
}
