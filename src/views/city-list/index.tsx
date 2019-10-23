import { createStackNavigator } from 'react-navigation-stack';
import { ListRoutes } from '../../common/constants/routes';
import { ListScreen } from './city-list';
import { Close } from '../../components/close';
import * as React from 'react';
import ClearButton from '../../components/clear-button';
import TextSearch from '../filters/text-search';

const CityListStack = createStackNavigator(
    {
        [ListRoutes.List]: { screen: ListScreen, navigationOptions: { header: null } },
        [ListRoutes.Location]: {
            screen: TextSearch,
            navigationOptions: ({ navigation }) => ({
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

export default CityListStack;
