import { LoginScreen } from './views/login/login';
import { TestRoutes } from './common/constants/routes';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Detail } from './views/detail/detail';

import FormTabs from './views/forms';

import { BookService } from './views/book-service/book-service-view';
import CountryListStack from './views/country-list';
import CityListStack from './views/city-list';
import { AccommodationList } from './views/accomodation-list/accommodation-list';

const RootStack = createStackNavigator({
    // [TestRoutes.Login]: {
    //     screen: TextSearch,
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
    [TestRoutes.CountryList]: { screen: CountryListStack, navigationOptions: { header: null } },
    [TestRoutes.CityList]: { screen: CityListStack, navigationOptions: { header: null } },
    [TestRoutes.Detail]: { screen: Detail, navigationOptions: { header: null } },
    [TestRoutes.AccommodationList]: { screen: AccommodationList, navigationOptions: { header: null } },
    [TestRoutes.Form]: FormTabs,
});

export default createAppContainer(RootStack);
