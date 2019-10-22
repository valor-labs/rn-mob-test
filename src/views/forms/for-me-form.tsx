import React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native';
import { DatePicker } from '../../components/date-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Footer } from '../../components/footer';
import { Button, TextInput } from 'react-native-paper';

export function FromMeForm() {
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
        <>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center' }}>
                <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={false}>
                    <TextInput
                        label='Name'
                        theme={{ colors: { primary: 'black' } }}
                        style={{ marginBottom: 21, backgroundColor: 'white' }}
                    />
                    <TextInput
                        label='Surname'
                        theme={{ colors: { primary: 'black' } }}
                        style={{ marginBottom: 21, backgroundColor: 'white' }}
                    />
                    <TextInput
                        label='Email'
                        theme={{ colors: { primary: 'black' } }}
                        style={{ marginBottom: 21, backgroundColor: 'white' }}
                    />
                    <TextInput
                        label='Phone number'
                        theme={{ colors: { primary: 'black' } }}
                        style={{ marginBottom: 21, backgroundColor: 'white' }}
                    />
                    <TextInput
                        label='Agency'
                        theme={{ colors: { primary: 'black' } }}
                        style={{ marginBottom: 21, backgroundColor: 'white' }}
                    />
                    <TextInput
                        label='Reason for Visit'
                        theme={{ colors: { primary: 'black' } }}
                        style={{ marginBottom: 21, backgroundColor: 'white' }}
                    />
                    <Dropdown label='Gender' data={data} />
                    <Dropdown label='Contract type' data={data2} />
                    <DatePicker placeholder='Arrival date' style={{ marginTop: 21 }} />
                    <DatePicker placeholder='Departure date' style={{ marginTop: 21 }} />
                    <TextInput
                        label='Additional remarks'
                        theme={{ colors: { primary: 'black' } }}
                        style={{ marginBottom: 21, backgroundColor: 'white' }}
                    />
                    <Button
                        icon='camera'
                        mode='outlined'
                        color='black'
                        style={{ width: 328, marginBottom: 21 }}
                        onPress={() => console.log('Hello')}
                    >
                        Attach flight tickets
                    </Button>
                </KeyboardAwareScrollView>
            </ScrollView>
            <Footer>
                <Button color='black' mode='contained' style={{ borderRadius: 4, width: 328, height: 40 }}>
                    Request booking
                </Button>
            </Footer>
        </>
    );
}
