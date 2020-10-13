import React from 'react';
import { Provider } from 'react-redux';
import {StyleProvider } from "native-base";
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import store from './reducers/';
import App from './App';
import Toast from './components/Toast';
import Loading from './components/Loading';

const Psf = ()=> {
	
    return (
        <Provider store={store}>
        	<Loading />
        	<Toast />
        	<StyleProvider style={getTheme(material)}>      		
                <App />
            </StyleProvider>
        </Provider>
    );
    
}

export default Psf
