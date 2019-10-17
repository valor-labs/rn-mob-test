import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationNativeContainer } from '@react-navigation/native';
import LoginScreen from './views/login/login';
import { ListScreen } from './views/list/list';
import { AuthRoutes } from './common/constants/routes';
import { Forms } from './views/forms/forms';
const RootStack = createStackNavigator();

const App = () => {
    return (
        <NavigationNativeContainer>
            <RootStack.Navigator headerMode='none'>
                <RootStack.Screen name={AuthRoutes.Login} component={LoginScreen} />
                <RootStack.Screen name={AuthRoutes.List} component={ListScreen} />
                <RootStack.Screen name={AuthRoutes.Form} component={Forms} />
            </RootStack.Navigator>
        </NavigationNativeContainer>
    );
};

export default App;
