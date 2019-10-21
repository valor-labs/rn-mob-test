import LoginScreen from './views/login/login';
import { ListScreen } from './views/list/list';
import { TestRoutes } from './common/constants/routes';
import { Forms } from './views/forms/forms';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Detail } from './views/detail/detail';

const RootStack = createStackNavigator(
    {
        [TestRoutes.Login]: LoginScreen,
        [TestRoutes.List]: ListScreen,
        [TestRoutes.Form]: Forms,
        [TestRoutes.Detail]: Detail,
    },
    {
        headerMode: 'none',
    }
);

export default createAppContainer(RootStack);
