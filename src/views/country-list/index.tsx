import { createStackNavigator } from 'react-navigation-stack';
import { CountryListRoutes } from '../../common/constants/routes';
import { ListScreen } from './country-list';
import { CountryFilterView } from '../filters/country-filter-view';
import { Close } from '../../components/close';
import * as React from 'react';
const CountryListStack = createStackNavigator(
    {
        [CountryListRoutes.List]: { screen: ListScreen, navigationOptions: { header: null } },
        [CountryListRoutes.Location]: {
            screen: CountryFilterView,
            navigationOptions: ({ navigation }) => ({
                title: 'Book guesthouse',
                headerLeft: <Close onPress={navigation.goBack} />,
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
