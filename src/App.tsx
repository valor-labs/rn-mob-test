import { LoginScreen } from './views/login/login';
import { ListScreen } from './views/list/list';
import { TestRoutes } from './common/constants/routes';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Detail } from './views/detail/detail';

import FormTabs from './views/forms';

const RootStack = createStackNavigator({
    [TestRoutes.Login]: { screen: LoginScreen, navigationOptions: { header: null } },
    [TestRoutes.List]: { screen: ListScreen, navigationOptions: { header: null } },
    [TestRoutes.Detail]: { screen: Detail, navigationOptions: { header: null } },
    [TestRoutes.Form]: FormTabs,
});

export default createAppContainer(RootStack);
