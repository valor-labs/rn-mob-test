import LoginScreen from './views/login/login';
import { ListScreen } from './views/list/list';
import { AuthRoutes } from './common/constants/routes';
import { Forms } from './views/forms/forms';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        [AuthRoutes.Login]: LoginScreen,
        [AuthRoutes.List]: ListScreen,
        [AuthRoutes.Form]: Forms,
    },
    {
        headerMode: 'none',
    }
);

export default createAppContainer(RootStack);
