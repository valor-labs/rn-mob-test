import { LoginScreen } from './views/login/login';
import { ListScreen } from './views/list/list';
import { TestRoutes } from './common/constants/routes';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Detail } from './views/detail/detail';

import FormTabs from './views/forms';
import { CountryFilterView } from './views/filters/country-filter';
import React from 'react';
import { Close } from './components/close';
import { BookService } from './views/book-service/book-service-view';

const RootStack = createStackNavigator({
    // [TestRoutes.Login]: {
    //     screen: CountryFilterView,
    //     navigationOptions: ({ navigation }) => ({
    //         title: 'Book guesthouse',
    //         headerLeft: <Close onPress={navigation.goBack} />,
    //         headerStyle: {
    //             backgroundColor: '#D8D9DB',
    //             elevation: 0,
    //             shadowOpacity: 0,
    //             borderBottomWidth: 0,
    //         },
    //         headerTintColor: 'black',
    //     }),
    // },
    [TestRoutes.Login]: { screen: LoginScreen, navigationOptions: { header: null } },
    [TestRoutes.BookService]: { screen: BookService, navigationOptions: { header: null } },
    [TestRoutes.List]: { screen: ListScreen, navigationOptions: { header: null } },
    [TestRoutes.Detail]: { screen: Detail, navigationOptions: { header: null } },
    [TestRoutes.Form]: FormTabs,
});

export default createAppContainer(RootStack);
