import React from 'react';
import { List, Item, Input, Label } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native';
import { DatePicker } from '../../components/date-picker';

// tslint:disable-next-line: no-any
export function FromMeForm({ navigation }: any) {
    const data = [
        {
            value: 'Male',
        },
        {
            value: 'Female',
        },
    ];
    const data2 = [
        {
            value: 'Locally recruited',
        },
    ];

    return (
        <ScrollView style={{ flex: 1, paddingLeft: 16, paddingRight: 16 }}>
            <List>
                <Item floatingLabel style={{ marginBottom: 21 }}>
                    <Label>Name</Label>
                    <Input />
                </Item>
                <Item floatingLabel style={{ marginBottom: 21 }}>
                    <Label>Surname</Label>
                    <Input />
                </Item>
                <Item floatingLabel style={{ marginBottom: 21 }}>
                    <Label>Email</Label>
                    <Input />
                </Item>
                <Item floatingLabel style={{ marginBottom: 21 }}>
                    <Label>Phone number</Label>
                    <Input />
                </Item>
                <Item floatingLabel style={{ marginBottom: 21 }}>
                    <Label>Agency</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Reason for Visit</Label>
                    <Input />
                </Item>
                <Dropdown label='Gender' data={data} />
                <Dropdown label='Contract type' data={data2} />
                <DatePicker
                    placeholder='Arrival date'
                    style={{ marginTop: 21 }}
                    openModal={() => navigation.navigate('Modal')}
                />
                <DatePicker
                    placeholder='Departure date'
                    style={{ marginTop: 21 }}
                    openModal={() => navigation.navigate('Modal')}
                />
            </List>
        </ScrollView>
    );
}
