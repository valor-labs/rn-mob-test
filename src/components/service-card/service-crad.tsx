import React from 'react';
import { View } from 'react-native';
import { Paragraph, IconButton } from 'react-native-paper';
import { serviceCardStyle } from './service-card.style';
import { Spacer } from '../spacer';

type Props = {
    title: string;
    icon: string;
};
export function ServiceCard(props: Props) {
    const { title, icon } = props;
    return (
        <View style={serviceCardStyle.container}>
            <IconButton icon={icon} size={25} />
            <Paragraph style={serviceCardStyle.title}>{title}</Paragraph>
            <Spacer />
            <IconButton icon='chevron-right' />
        </View>
    );
}
