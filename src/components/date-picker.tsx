import React, { useState } from 'react';
import { View, Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import { Icon, Button } from 'native-base';
import { Calendar } from 'react-native-calendars';
type Props = {
    placeholder: string;
    style?: { marginTop: number };
    openModal: Function;
};

export function DatePicker(props: Props) {
    const { placeholder, style, openModal } = props;

    // const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={[{ borderBottomColor: '#9EA5AD', borderBottomWidth: 1 }, style]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ marginBottom: 8, fontSize: 16, lineHeight: 24, color: 'grey' }}>{placeholder}</Text>
                <Button transparent onPress={() => openModal()}>
                    <Icon
                        name='calendar'
                        ios='calendar'
                        android='calendar'
                        type='AntDesign'
                        style={{ fontSize: 24, color: 'grey' }}
                    ></Icon>
                </Button>
            </View>
            {/* <CalendarModal modalVisible={modalVisible} close={() => setModalVisible(!modalVisible)} /> */}
        </View>
    );
}

// function CalendarModal({ modalVisible, close }: { modalVisible: boolean; close: (e: GestureResponderEvent) => void }) {
//     return (
//         <ModalWrapper style={{ width: 280, height: 180, paddingLeft: 24, paddingRight: 24 }} visible={modalVisible}>
//             <Calendar monthFormat={'MMMM'} />
//             <TouchableHighlight onPress={close}>
//                 <Text>Hide Modal</Text>
//             </TouchableHighlight>
//         </ModalWrapper>
//     );
// }
