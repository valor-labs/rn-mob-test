import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationNativeContainer } from '@react-navigation/native';
import LoginScreen from './views/login/login';
import { ListScreen } from './views/list/List';
import { AuthRoutes } from './common/constants/routes';

const RootStack = createStackNavigator();

const App = () => {
    return (
        <NavigationNativeContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#D8D9DB',
                    },
                }}
            >
                <RootStack.Screen name={AuthRoutes.Login} component={LoginScreen} options={{ header: null }} />
                <RootStack.Screen name={AuthRoutes.List} component={ListScreen} />
            </RootStack.Navigator>
        </NavigationNativeContainer>
    );
};
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4142 3.41421C18.1953 2.63317 18.1953 1.36683 17.4142 0.585786C16.6332 -0.195262 15.3668 -0.195262 14.5858 0.585786L0.585786 14.5858C-0.195262 15.3668 -0.195262 16.6332 0.585786 17.4142L14.5858 31.4142C15.3668 32.1953 16.6332 32.1953 17.4142 31.4142C18.1953 30.6332 18.1953 29.3668 17.4142 28.5858L6.82843 18H30.125C31.1605 18 32 17.1046 32 16C32 14.8954 31.1605 14 30.125 14H6.82843L17.4142 3.41421Z" fill="black"/>
</svg>

export default App;
