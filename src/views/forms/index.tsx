import React from 'react';

import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { FromMeForm } from './for-me-form';
import { Close } from '../../components/close';

const FormTabs = createMaterialTopTabNavigator(
    {
        Me: FromMeForm,
        Guest: FromMeForm,
    },
    {
        tabBarOptions: {
            contentContainerStyle: {
                minHeight: 50,
            },
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
            indicatorStyle: { backgroundColor: 'black' },
            style: {
                backgroundColor: '#D8D9DB',
            },
        },
        navigationOptions: ({ navigation }) => ({
            title: 'Book guesthouse',
            headerLeft: <Close onPress={navigation.goBack} />,
            headerStyle: {
                backgroundColor: '#D8D9DB',
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTintColor: 'black',
        }),
    }
);

export default FormTabs;
