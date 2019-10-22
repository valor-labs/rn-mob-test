import React from 'react';
import { Line } from '../../components/line';
import { TestRoutes } from '../../common/constants/routes';
import Swiper from 'react-native-swiper';
import { ScrollView, StyleSheet, View } from 'react-native';
import { MyHeader } from '../../components/header';
import { Text, Title, Headline, Button } from 'react-native-paper';
import { Footer } from '../../components/footer';

// tslint:disable-next-line:no-any
export function Detail({ navigation }: any) {
    return (
        <View style={{ flex: 1 }}>
            <MyHeader goBack={navigation.pop} />
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: 239, zIndex: -1 }}>
                    <Swiper showsButtons={false} height={239}>
                        <View style={styles.slide1}>
                            <Text style={styles.text}>Hello Swiper</Text>
                        </View>
                        <View style={styles.slide2}>
                            <Text style={styles.text}>Beautiful</Text>
                        </View>
                        <View style={styles.slide3}>
                            <Text style={styles.text}>And simple</Text>
                        </View>
                    </Swiper>
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingTop: 19,
                        paddingLeft: 16,
                        paddingRight: 16,
                    }}
                >
                    <Headline style={{ marginBottom: 30 }}>WHO guesthouse</Headline>
                    <Text style={{ marginBottom: 24 }}>
                        The WHO guesthouse in Kabul has an overall capacity of 23 beds out of which 16 are for long term
                        occupants. Each room is air-conditioned and has a private living area with sofa bed, two chairs,
                        smart TV and fan. A fully equipped kitchen is available for each guest
                    </Text>
                    <Line />
                    <Title style={{ alignSelf: 'flex-start', marginTop: 24, marginBottom: 24 }}>Surroundings</Title>
                    <Text style={{ marginBottom: 24 }}>
                        Few markets and shops are located inside the compound. The security situation in the area is
                        mostly calm but guests have to check with the security unit if they want to venture outside.
                    </Text>
                    <Line />
                </View>
            </ScrollView>
            <Footer>
                <Button
                    color='black'
                    mode='contained'
                    style={{ borderRadius: 4, width: 328, height: 40 }}
                    onPress={() => navigation.navigate(TestRoutes.Form)}
                >
                    Request booking
                </Button>
            </Footer>
        </View>
    );
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
