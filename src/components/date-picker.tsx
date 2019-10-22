import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { IconButton } from 'react-native-paper';

type Props = {
    placeholder: string;
    style?: { marginTop: number };
};

export function DatePicker(props: Props) {
    const { placeholder, style } = props;

    const [showPicker, setShowPicker] = useState(false);
    const [currDate, setCurrDate] = useState();
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[{ borderBottomColor: '#9EA5AD', borderBottomWidth: 1 }, style]}
            onPress={() => {
                setShowPicker(!showPicker);
                if (!currDate) {
                    setCurrDate(new Date());
                }
            }}
        >
            {currDate && <Text style={{ fontSize: 12, lineHeight: 16, color: 'grey' }}>{placeholder}</Text>}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginBottom: 8, fontSize: 16, lineHeight: 24, color: !currDate ? 'grey' : 'black' }}>
                    {!currDate ? placeholder : currDate.toLocaleDateString('en-US')}
                </Text>
                <IconButton icon='calendar' color='grey' size={24} />
            </View>
            <DateTimePicker
                isVisible={showPicker}
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
                date={currDate}
            />
        </TouchableOpacity>
    );

    function handleDatePicked(date: Date) {
        setCurrDate(date);
        hideDateTimePicker();
    }

    function hideDateTimePicker() {
        setShowPicker(false);
    }
}
