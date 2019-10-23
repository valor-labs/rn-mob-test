import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import * as React from 'react';
import { configureStore } from './src/store';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

function Main() {
    return (
        <Provider store={configureStore()}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
