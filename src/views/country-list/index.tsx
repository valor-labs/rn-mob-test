import { createStackNavigator } from 'react-navigation-stack';
import { CountryListRoutes } from '../../common/constants/routes';
import { ListScreen } from './country-list';
import { Close } from '../../components/close';
import * as React from 'react';
import ClearButton from '../../components/clear-button';
import TextSearch from '../filters/text-search';

const CountryListStack = createStackNavigator(
    {
        [CountryListRoutes.List]: { screen: ListScreen, navigationOptions: { header: null } },
        [CountryListRoutes.Location]: {
            screen: TextSearch,
            navigationOptions: ({ navigation }) => ({
                title: 'Book guesthouse',
                headerLeft: <Close onPress={navigation.goBack} />,
                headerRight: <ClearButton />,
                headerStyle: {
                    backgroundColor: '#D8D9DB',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                },
                headerTintColor: 'black',
            }),
        },
    },
    {
        mode: 'modal',
    }
);

export default CountryListStack;
