import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationNativeContainer } from '@react-navigation/native';
import LoginScreen from './views/login/Login';

const RootStack = createStackNavigator();

const App = () => {
    return (
        <NavigationNativeContainer>
            <RootStack.Navigator initialRouteName='Login' headerMode='none'>
                <RootStack.Screen name='Login' component={LoginScreen} />
            </RootStack.Navigator>
        </NavigationNativeContainer>
    );
};

export default App;
