import React from 'react';
import { List, Item, Input, Label, Button, Text, View, Icon } from 'native-base';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { DatePicker } from '../../components/date-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
            <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
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
                    <Item floatingLabel style={{ marginBottom: 21, marginTop: 10 }}>
                        <Label>Additional remarks</Label>
                        <Input />
                    </Item>
                    <Button bordered dark block style={{ width: 328, height: 40, marginBottom: 21 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                name='attachment'
                                ios='attachment'
                                android='attachment'
                                type='MaterialCommunityIcons'
                            ></Icon>
                            <Text style={{ textAlign: 'center' }}>Attach flight tickets</Text>
                        </View>
                    </Button>
                </List>
            </KeyboardAwareScrollView>
        </ScrollView>
    );
}
