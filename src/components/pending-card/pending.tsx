import React from 'react';
import { View } from 'react-native';
import { pendingStyles } from './pending.style';
import { IconButton, Title, Paragraph } from 'react-native-paper';

export function PendingCard() {
    return (
        <View style={pendingStyles.container}>
            <IconButton icon='alert-circle' size={25} />
            <View>
                <Title>Pending Request</Title>
                <Paragraph>You have one booking request</Paragraph>
            </View>
        </View>
    );
}
