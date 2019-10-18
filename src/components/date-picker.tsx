import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { Icon } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

type Props = {
    placeholder: string;
    style?: { marginTop: number };
    openModal: Function;
};

export function DatePicker(props: Props) {
    const { placeholder, style } = props;

    const [showPicker, setShowPicker] = useState(false);
    const [currDate, setCurrDate] = useState();
    return (
        <TouchableOpacity
            style={[{ borderBottomColor: '#9EA5AD', borderBottomWidth: 1 }, style]}
            onPress={() => {
                setShowPicker(!showPicker);
                setCurrDate(new Date());
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginBottom: 8, fontSize: 16, lineHeight: 24, color: !currDate ? 'grey' : 'black' }}>
                    {!currDate ? placeholder : currDate.toLocaleDateString('en-US')}
                </Text>
                <Icon
                    name='calendar'
                    ios='calendar'
                    android='calendar'
                    type='AntDesign'
                    style={{ fontSize: 24, color: 'grey' }}
                ></Icon>
            </View>
            {showPicker ? (
                <DateTimePicker
                    value={currDate || new Date()}
                    mode='date'
                    is24Hour={true}
                    display='calendar'
                    // tslint:disable-next-line: no-any
                    onChange={(_, date: any) => {
                        date && setCurrDate(date);
                        if (Platform.OS !== 'ios') {
                            setShowPicker(false);
                        }
                    }}
                />
            ) : (
                <></>
            )}
        </TouchableOpacity>
    );
}
