import LoginScreen from './views/login/login';
import { ListScreen } from './views/list/list';
import { AuthRoutes } from './common/constants/routes';
import { Forms } from './views/forms/forms';
import { CalendarModal } from './views/modal/calendar/calendar';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';

const FormStack = createStackNavigator(
    {
        Main: Forms,
        Modal: { screen: CalendarModal },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        transparentCard: true,
        transitionConfig: () => fadeIn(),
    }
);

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
