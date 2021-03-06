/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Root=()=>{
  
    return(
        <Provider store={store}>
        <App/>
    </Provider>
    )
   
}
AppRegistry.registerComponent(appName, () => Root);
